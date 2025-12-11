import type { APIRoute } from 'astro';
import { createServerClient } from '@/utilities/supabase';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const formData = await request.formData();
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	if (!email || !password) {
		return new Response(
			JSON.stringify({ error: 'Email y contraseña son requeridos' }),
			{ status: 400, headers: { 'Content-Type': 'application/json' } }
		);
	}

	const supabase = createServerClient(cookies);

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return new Response(
			JSON.stringify({ error: error.message }),
			{ status: 401, headers: { 'Content-Type': 'application/json' } }
		);
	}

	if (data.session) {
		// El cliente de Supabase ya estableció las cookies automáticamente
		// Solo necesitamos redirigir
		return redirect('/dashboard', 302);
	}

	return new Response(
		JSON.stringify({ error: 'Error al iniciar sesión' }),
		{ status: 500, headers: { 'Content-Type': 'application/json' } }
	);
};

