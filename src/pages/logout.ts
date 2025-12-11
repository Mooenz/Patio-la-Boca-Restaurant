import type { APIRoute } from 'astro';
import { createServerClient } from '@/utilities/supabase';
import { invalidateCache } from '@/utilities/cache';

export const GET: APIRoute = async ({ cookies, redirect }) => {
	const supabase = createServerClient(cookies);

	// Invalidar caché antes de cerrar sesión
	invalidateCache();

	await supabase.auth.signOut();

	// Eliminar cookies de sesión
	cookies.delete('sb-access-token', { path: '/' });
	cookies.delete('sb-refresh-token', { path: '/' });

	return redirect('/login');
};
