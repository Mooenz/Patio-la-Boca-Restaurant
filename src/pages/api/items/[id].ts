import type { APIRoute } from 'astro';
import { createServerClient } from '@/utilities/supabase';
import { updateMenuItem, deleteMenuItem } from '@/utilities/menu-db';
import { getUser } from '@/utilities/auth';

export const GET: APIRoute = async ({ params, cookies }) => {
	const supabase = createServerClient(cookies);
	const { id } = params;

	const { data, error } = await supabase.from('menu_items').select('*').eq('id', id).single();

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
};

// PUT: Actualizar un plato (requiere autenticación)
export const PUT: APIRoute = async ({ params, request, cookies }) => {
	// Verificar autenticación
	const user = await getUser(cookies);
	if (!user) {
		return new Response(JSON.stringify({ error: 'No autorizado' }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const { id } = params;

	try {
		const body = await request.json();
		const data = await updateMenuItem(cookies, id!, body);

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};

// DELETE: Eliminar un plato (requiere autenticación)
export const DELETE: APIRoute = async ({ params, cookies }) => {
	// Verificar autenticación
	const user = await getUser(cookies);
	if (!user) {
		return new Response(JSON.stringify({ error: 'No autorizado' }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const { id } = params;

	try {
		await deleteMenuItem(cookies, id!);

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
