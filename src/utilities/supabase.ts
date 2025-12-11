import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error('Missing Supabase environment variables');
}

// Cliente para uso en el servidor (SSR)
export function createServerClient(cookies: any) {
	return createClient(supabaseUrl, supabaseAnonKey, {
		auth: {
			storage: {
				getItem: (key: string) => {
					return cookies.get(key)?.value ?? null;
				},
				setItem: (key: string, value: string) => {
					try {
						cookies.set(key, value, {
							path: '/',
							httpOnly: false, // Necesario para que el cliente también pueda leerlas
							sameSite: 'lax',
							secure: import.meta.env.PROD,
							maxAge: 60 * 60 * 24 * 7, // 7 días
						});
					} catch (error) {
						console.error('Error setting cookie:', error);
					}
				},
				removeItem: (key: string) => {
					try {
						cookies.delete(key, {
							path: '/',
						});
					} catch (error) {
						console.error('Error removing cookie:', error);
					}
				},
			},
		},
	});
}

// Cliente para uso en el cliente (browser)
export function createBrowserClient() {
	return createClient(supabaseUrl, supabaseAnonKey);
}

