/**
 * Sistema de caché en memoria para reducir requests a Supabase
 * Solo se usa en el servidor (Astro SSR)
 */

const isDev = !import.meta.env.PROD;

// Logger condicional - solo muestra logs en desarrollo
const debugLog = (...args: any[]) => {
	if (isDev) {
		console.log(...args);
	}
};

interface CacheEntry<T> {
	data: T;
	timestamp: number;
	userId: string;
}

interface CacheStore {
	menuSections: CacheEntry<any[]> | null;
	menuItems: CacheEntry<any[]> | null;
}

// Caché en memoria (persiste mientras el servidor esté corriendo)
const cache: CacheStore = {
	menuSections: null,
	menuItems: null,
};

// Tiempo de vida del caché: 1 hora (en producción)
const CACHE_TTL = import.meta.env.PROD ? 60 * 60 * 1000 : 30 * 1000; // 1 hora en prod, 30s en dev

/**
 * Verifica si el caché es válido
 */
function isCacheValid<T>(entry: CacheEntry<T> | null, userId: string): boolean {
	if (!entry) return false;
	if (entry.userId !== userId) return false;

	const now = Date.now();
	return now - entry.timestamp < CACHE_TTL;
}

/**
 * Obtiene las secciones del menú desde caché o null si no es válido
 */
export function getCachedMenuSections(userId: string): any[] | null {
	if (isCacheValid(cache.menuSections, userId)) {
		debugLog('[Cache] Usando menuSections desde caché');
		return cache.menuSections!.data;
	}
	return null;
}

/**
 * Guarda las secciones del menú en caché
 */
export function setCachedMenuSections(data: any[], userId: string): void {
	cache.menuSections = {
		data,
		timestamp: Date.now(),
		userId,
	};
	debugLog('[Cache] menuSections guardado en caché');
}

/**
 * Obtiene los items del menú desde caché o null si no es válido
 */
export function getCachedMenuItems(userId: string): any[] | null {
	if (isCacheValid(cache.menuItems, userId)) {
		debugLog('[Cache] Usando menuItems desde caché');
		return cache.menuItems!.data;
	}
	return null;
}

/**
 * Guarda los items del menú en caché
 */
export function setCachedMenuItems(data: any[], userId: string): void {
	cache.menuItems = {
		data,
		timestamp: Date.now(),
		userId,
	};
	debugLog('[Cache] menuItems guardado en caché');
}

/**
 * Actualiza un item específico en el caché (sin hacer request)
 */
export function updateCachedMenuItem(itemId: string, updates: Partial<any>, userId: string): void {
	if (cache.menuItems && cache.menuItems.userId === userId) {
		cache.menuItems.data = cache.menuItems.data.map((item) => (item.id === itemId ? { ...item, ...updates } : item));
		cache.menuItems.timestamp = Date.now();
		debugLog('[Cache] Item actualizado en caché:', itemId);
	}
}

/**
 * Añade un nuevo item al caché
 */
export function addCachedMenuItem(item: any, userId: string): void {
	if (cache.menuItems && cache.menuItems.userId === userId) {
		cache.menuItems.data.push(item);
		cache.menuItems.timestamp = Date.now();
		debugLog('[Cache] Nuevo item añadido al caché');
	}
}

/**
 * Actualiza una sección específica en el caché
 */
export function updateCachedMenuSection(sectionId: string, updates: Partial<any>, userId: string): void {
	if (cache.menuSections && cache.menuSections.userId === userId) {
		cache.menuSections.data = cache.menuSections.data.map((section) => (section.id === sectionId ? { ...section, ...updates } : section));
		cache.menuSections.timestamp = Date.now();
		debugLog('[Cache] Sección actualizada en caché:', sectionId);
	}
}

/**
 * Añade una nueva sección al caché
 */
export function addCachedMenuSection(section: any, userId: string): void {
	if (cache.menuSections && cache.menuSections.userId === userId) {
		cache.menuSections.data.push(section);
		cache.menuSections.timestamp = Date.now();
		debugLog('[Cache] Nueva sección añadida al caché');
	}
}

/**
 * Elimina un item específico del caché
 */
export function removeCachedMenuItem(itemId: string, userId: string): void {
	if (cache.menuItems && cache.menuItems.userId === userId) {
		cache.menuItems.data = cache.menuItems.data.filter((item) => item.id !== itemId);
		cache.menuItems.timestamp = Date.now();
		debugLog('[Cache] Item eliminado del caché:', itemId);
	}
}

/**
 * Elimina una sección específica del caché
 */
export function removeCachedMenuSection(sectionId: string, userId: string): void {
	if (cache.menuSections && cache.menuSections.userId === userId) {
		cache.menuSections.data = cache.menuSections.data.filter((section) => section.id !== sectionId);
		cache.menuSections.timestamp = Date.now();
		debugLog('[Cache] Sección eliminada del caché:', sectionId);
	}
}

/**
 * Invalida todo el caché (usado al cerrar sesión)
 */
export function invalidateCache(): void {
	cache.menuSections = null;
	cache.menuItems = null;
	debugLog('[Cache] Caché invalidado');
}

/**
 * Invalida el caché de un usuario específico
 */
export function invalidateUserCache(userId: string): void {
	if (cache.menuSections?.userId === userId) {
		cache.menuSections = null;
	}
	if (cache.menuItems?.userId === userId) {
		cache.menuItems = null;
	}
	debugLog('[Cache] Caché de usuario invalidado:', userId);
}

/**
 * Fuerza la recarga del caché (invalida y marca para recargar)
 */
export function forceRefreshCache(userId: string): void {
	invalidateUserCache(userId);
	debugLog('[Cache] Forzando recarga de caché para usuario:', userId);
}
