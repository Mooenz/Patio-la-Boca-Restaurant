import type { MiddlewareHandler } from 'astro';
import { isAuthenticated } from '@/utilities/auth';

// Rutas que requieren autenticación
const protectedRoutes = ['/dashboard', '/admin'];

// Rutas que solo pueden ser accedidas si NO estás autenticado
const publicOnlyRoutes = ['/login'];

export const onRequest: MiddlewareHandler = async (context, next) => {
	const { url, cookies } = context;
	const pathname = url.pathname;

	// Verificar si la ruta está protegida
	const isProtectedRoute = protectedRoutes.some((route) =>
		pathname.startsWith(route)
	);

	// Verificar si la ruta es solo para usuarios no autenticados
	const isPublicOnlyRoute = publicOnlyRoutes.some((route) =>
		pathname.startsWith(route)
	);

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

	return next();
};

