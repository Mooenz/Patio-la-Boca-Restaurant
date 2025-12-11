import type { AstroCookies } from 'astro';
import { createServerClient } from './supabase';

/**
 * Obtiene el usuario actual desde las cookies
 */
export async function getUser(cookies: AstroCookies) {
	const supabase = createServerClient(cookies);
	const {
		data: { user },
	} = await supabase.auth.getUser();
	return user;
}

/**
 * Obtiene la sesión actual desde las cookies
 */
export async function getSession(cookies: AstroCookies) {
	const supabase = createServerClient(cookies);
	const {
		data: { session },
	} = await supabase.auth.getSession();
	return session;
}

/**
 * Verifica si el usuario está autenticado
 */
export async function isAuthenticated(cookies: AstroCookies): Promise<boolean> {
	const user = await getUser(cookies);
	return !!user;
}

/**
 * Redirige al usuario no autenticado a la página de login
 */
export async function requireAuth(
	cookies: AstroCookies,
	redirectTo: string = '/login'
): Promise<{ user: any; supabase: any } | null> {
	const user = await getUser(cookies);
	if (!user) {
		return null;
	}
	const supabase = createServerClient(cookies);
	return { user, supabase };
}

