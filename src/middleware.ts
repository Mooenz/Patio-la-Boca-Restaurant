import type { MiddlewareHandler } from 'astro';
import { isAuthenticated } from '@/utilities/auth';

// Rutas que requieren autenticación
const protectedRoutes = ['/dashboard', '/admin'];

// Rutas que solo pueden ser accedidas si NO estás autenticado
const publicOnlyRoutes = ['/login'];

// Rutas de API que necesitan protección CSRF adicional
const apiRoutes = ['/api/'];

export const onRequest: MiddlewareHandler = async (context, next) => {
	const { url, cookies, request } = context;
	const pathname = url.pathname;

	// Verificar si la ruta está protegida
	const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

	// Verificar si la ruta es solo para usuarios no autenticados
	const isPublicOnlyRoute = publicOnlyRoutes.some((route) => pathname.startsWith(route));

	// Verificar si es una ruta de API
	const isApiRoute = apiRoutes.some((route) => pathname.startsWith(route));

	// Protección básica contra CSRF para APIs de escritura
	if (isApiRoute && ['POST', 'PUT', 'DELETE'].includes(request.method)) {
		const origin = request.headers.get('origin');
		const host = request.headers.get('host');

		// Verificar que el origen coincida con el host (protección CSRF)
		if (origin) {
			const originUrl = new URL(origin);
			if (originUrl.host !== host) {
				return new Response(JSON.stringify({ error: 'CSRF token inválido' }), {
					status: 403,
					headers: { 'Content-Type': 'application/json' },
				});
			}
		}
	}

	// Si es una ruta protegida, verificar autenticación
	if (isProtectedRoute) {
		const authenticated = await isAuthenticated(cookies);
		if (!authenticated) {
			return context.redirect('/login');
		}
	}

	// Si es una ruta solo para usuarios no autenticados y el usuario ya está autenticado
	if (isPublicOnlyRoute) {
		const authenticated = await isAuthenticated(cookies);
		if (authenticated) {
			return context.redirect('/dashboard');
		}
	}

	// Ejecutar el siguiente middleware/página
	const response = await next();

	// Agregar headers de seguridad a todas las respuestas
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-XSS-Protection', '1; mode=block');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

	return response;
};
