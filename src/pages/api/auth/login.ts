import type { APIRoute } from 'astro';
import { createServerClient } from '@/utilities/supabase';

// Rate limiting simple en memoria
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutos

function getClientIP(request: Request): string {
	return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
	const attempt = loginAttempts.get(ip);
	if (!attempt) return false;

	// Limpiar intentos antiguos
	if (Date.now() - attempt.lastAttempt > LOCKOUT_TIME) {
		loginAttempts.delete(ip);
		return false;
	}

	return attempt.count >= MAX_ATTEMPTS;
}

function recordAttempt(ip: string, success: boolean): void {
	if (success) {
		loginAttempts.delete(ip);
		return;
	}

	const attempt = loginAttempts.get(ip) || { count: 0, lastAttempt: 0 };
	attempt.count++;
	attempt.lastAttempt = Date.now();
	loginAttempts.set(ip, attempt);
}

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const clientIP = getClientIP(request);

	// Verificar rate limiting
	if (isRateLimited(clientIP)) {
		return new Response(JSON.stringify({ error: 'Demasiados intentos. Intenta de nuevo en 15 minutos.' }), { status: 429, headers: { 'Content-Type': 'application/json' } });
	}

	const formData = await request.formData();
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	if (!email || !password) {
		return new Response(JSON.stringify({ error: 'Email y contraseña son requeridos' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
	}

	const supabase = createServerClient(cookies);

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		recordAttempt(clientIP, false);
		return new Response(JSON.stringify({ error: error.message }), { status: 401, headers: { 'Content-Type': 'application/json' } });
	}

	if (data.session) {
		recordAttempt(clientIP, true);
		return redirect('/dashboard', 302);
	}

	return new Response(JSON.stringify({ error: 'Error al iniciar sesión' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
};
