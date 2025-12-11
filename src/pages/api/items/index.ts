import type { APIRoute } from 'astro';
import { createServerClient } from '@/utilities/supabase';
import { createMenuItem } from '@/utilities/menu-db';
import { getUser } from '@/utilities/auth';

export const GET: APIRoute = async ({ cookies }) => {
	const supabase = createServerClient(cookies);

	const { data, error } = await supabase
		.from('menu_items')
		.select(
			`
            *,
            menu_sections (
                id,
                title_es,
                title_en,
                slug
            )
        `
		)
		.order('display_order', { ascending: true });

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
};

// POST: Crear un nuevo plato (requiere autenticación)
export const POST: APIRoute = async ({ request, cookies }) => {
	// Verificar autenticación
	const user = await getUser(cookies);
	if (!user) {
		return new Response(JSON.stringify({ error: 'No autorizado' }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	try {
		const body = await request.json();
		const data = await createMenuItem(cookies, body);

		return new Response(JSON.stringify(data), {
			status: 201,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
