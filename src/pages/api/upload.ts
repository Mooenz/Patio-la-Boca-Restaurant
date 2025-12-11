import type { APIRoute } from 'astro';
import { createServerClient } from '@/utilities/supabase';
import fs from 'fs/promises';
import path from 'path';

// Configuración de límites
const MAX_WIDTH = 1000;
const MAX_HEIGHT = 1000;
const MAX_FILE_SIZE = 500 * 1024; // 500KB - tamaño máximo para 1000x1000 con buena calidad
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

/**
 * Sanitiza el nombre del archivo para evitar path traversal y caracteres peligrosos
 */
function sanitizeFilename(filename: string): string {
	// Remover path traversal
	let sanitized = filename.replace(/\.\./g, '').replace(/[\/\\]/g, '');

	// Solo permitir caracteres alfanuméricos, guiones y guiones bajos
	sanitized = sanitized.replace(/[^a-zA-Z0-9\-_\.]/g, '');

	// Limitar longitud
	if (sanitized.length > 100) {
		const ext = path.extname(sanitized);
		sanitized = sanitized.substring(0, 96) + ext;
	}

	return sanitized;
}

/**
 * Genera un nombre de archivo seguro basado en el ID y slug
 */
function generateSafeFilename(id: string, slug: string, extension: string): string {
	// Sanitizar el slug
	const safeSlug = slug
		.toLowerCase()
		.replace(/[^a-z0-9]/g, '-')
		.replace(/-+/g, '-')
		.substring(0, 50);

	// Sanitizar el ID (solo números y letras)
	const safeId = id.replace(/[^a-zA-Z0-9]/g, '').substring(0, 20);

	// Asegurar que la extensión es válida
	const safeExt = ALLOWED_EXTENSIONS.includes(extension.toLowerCase()) ? extension.toLowerCase() : '.jpg';

	return `${safeId}-${safeSlug}${safeExt}`;
}

/**
 * Valida el tipo MIME real del archivo leyendo los magic bytes
 */
async function validateMagicBytes(buffer: Buffer): Promise<string | null> {
	// Magic bytes para diferentes formatos de imagen
	const signatures: { [key: string]: number[] } = {
		'image/jpeg': [0xff, 0xd8, 0xff],
		'image/png': [0x89, 0x50, 0x4e, 0x47],
		'image/gif': [0x47, 0x49, 0x46],
		'image/webp': [0x52, 0x49, 0x46, 0x46], // RIFF header (WebP starts with RIFF)
	};

	for (const [mimeType, signature] of Object.entries(signatures)) {
		let matches = true;
		for (let i = 0; i < signature.length; i++) {
			if (buffer[i] !== signature[i]) {
				matches = false;
				break;
			}
		}
		if (matches) {
			// Verificación adicional para WebP
			if (mimeType === 'image/webp') {
				// WebP tiene "WEBP" en los bytes 8-11
				if (buffer[8] === 0x57 && buffer[9] === 0x45 && buffer[10] === 0x42 && buffer[11] === 0x50) {
					return mimeType;
				}
				continue;
			}
			return mimeType;
		}
	}

	return null;
}

export const POST: APIRoute = async ({ request, cookies }) => {
	// Verificar autenticación
	const supabase = createServerClient(cookies);
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return new Response(JSON.stringify({ error: 'No autorizado' }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	try {
		const formData = await request.formData();
		const file = formData.get('image') as File | null;
		const menuId = formData.get('menuId') as string;
		const menuSlug = formData.get('menuSlug') as string;

		if (!file) {
			return new Response(JSON.stringify({ error: 'No se proporcionó ninguna imagen' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		if (!menuId || !menuSlug) {
			return new Response(JSON.stringify({ error: 'Se requiere ID y slug del menú' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		// Validar tipo MIME declarado
		if (!ALLOWED_TYPES.includes(file.type)) {
			return new Response(
				JSON.stringify({
					error: `Tipo de archivo no permitido. Solo se aceptan: ${ALLOWED_EXTENSIONS.join(', ')}`,
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' },
				}
			);
		}

		// Validar tamaño
		if (file.size > MAX_FILE_SIZE) {
			return new Response(
				JSON.stringify({
					error: `El archivo es demasiado grande. Tamaño máximo: ${MAX_FILE_SIZE / 1024}KB`,
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' },
				}
			);
		}

		// Leer el archivo como buffer
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		// Validar magic bytes (tipo real del archivo)
		const realMimeType = await validateMagicBytes(buffer);
		if (!realMimeType || !ALLOWED_TYPES.includes(realMimeType)) {
			return new Response(
				JSON.stringify({
					error: 'El archivo no es una imagen válida o el tipo no coincide con la extensión',
				}),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' },
				}
			);
		}

		// Obtener extensión del archivo original
		const originalExt = path.extname(file.name).toLowerCase();

		// Generar nombre de archivo seguro
		const safeFilename = generateSafeFilename(menuId, menuSlug, originalExt);

		// Ruta donde se guardará la imagen
		const uploadDir = path.join(process.cwd(), 'public', 'images');
		const filePath = path.join(uploadDir, safeFilename);

		// Crear directorio si no existe
		await fs.mkdir(uploadDir, { recursive: true });

		// Verificar que no estamos escribiendo fuera del directorio permitido (path traversal protection)
		const resolvedPath = path.resolve(filePath);
		const resolvedUploadDir = path.resolve(uploadDir);
		if (!resolvedPath.startsWith(resolvedUploadDir)) {
			return new Response(JSON.stringify({ error: 'Ruta de archivo no válida' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		// Guardar el archivo
		await fs.writeFile(filePath, buffer);

		// Retornar la ruta pública de la imagen
		const publicPath = `/images/${safeFilename}`;

		return new Response(
			JSON.stringify({
				success: true,
				path: publicPath,
				filename: safeFilename,
			}),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	} catch (error: any) {
		console.error('Error al subir imagen:', error);
		return new Response(JSON.stringify({ error: 'Error interno al procesar la imagen' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
