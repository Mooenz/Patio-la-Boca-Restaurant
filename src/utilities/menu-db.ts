import { createServerClient } from './supabase';
import type { AstroCookies } from 'astro';
import { getCachedMenuSections, setCachedMenuSections, getCachedMenuItems, setCachedMenuItems, updateCachedMenuItem, updateCachedMenuSection, addCachedMenuItem, addCachedMenuSection, removeCachedMenuItem, removeCachedMenuSection } from '@/utilities/cache';

/**
 * Obtiene el userId de las cookies de sesión
 */
async function getUserId(cookies: AstroCookies): Promise<string | null> {
	const supabase = createServerClient(cookies);
	const {
		data: { user },
	} = await supabase.auth.getUser();
	return user?.id || null;
}

/**
 * Obtiene todas las secciones del menú (con caché)
 */
export async function getMenuSections(cookies: AstroCookies, includeInactive = false) {
	const userId = await getUserId(cookies);

	// Intentar obtener desde caché si hay usuario autenticado
	if (userId) {
		const cached = getCachedMenuSections(userId);
		if (cached) {
			// Filtrar si es necesario
			return includeInactive ? cached : cached.filter((s) => s.active);
		}
	}

	// Si no hay caché válido, hacer request
	const supabase = createServerClient(cookies);
	let query = supabase.from('menu_sections').select('*').order('display_order', { ascending: true });

	// Para el caché, siempre traemos todo (incluido inactivos)
	const { data, error } = await query;

	if (error) {
		console.error('Error fetching menu sections:', error);
		return [];
	}

	// Guardar en caché si hay usuario
	if (userId && data) {
		setCachedMenuSections(data, userId);
	}

	// Retornar filtrado si es necesario
	return includeInactive ? data || [] : (data || []).filter((s) => s.active);
}

/**
 * Obtiene todos los items del menú (con caché)
 */
export async function getAllMenuItems(cookies: AstroCookies, includeInactive = false) {
	const userId = await getUserId(cookies);

	// Intentar obtener desde caché si hay usuario autenticado
	if (userId) {
		const cached = getCachedMenuItems(userId);
		if (cached) {
			return includeInactive ? cached : cached.filter((item) => item.active);
		}
	}

	// Si no hay caché válido, hacer request
	const supabase = createServerClient(cookies);
	let query = supabase
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

	const { data, error } = await query;

	if (error) {
		console.error('Error fetching menu items:', error);
		return [];
	}

	// Guardar en caché si hay usuario
	if (userId && data) {
		setCachedMenuItems(data, userId);
	}

	return includeInactive ? data || [] : (data || []).filter((item) => item.active);
}

/**
 * Crea una nueva sección de menú y actualiza el caché
 */
export async function createMenuSection(cookies: AstroCookies, sectionData: any) {
	const supabase = createServerClient(cookies);
	const userId = await getUserId(cookies);

	const { data, error } = await supabase.from('menu_sections').insert(sectionData).select().single();

	if (error) {
		throw error;
	}

	// Actualizar caché
	if (userId && data) {
		addCachedMenuSection(data, userId);
	}

	return data;
}

/**
 * Actualiza una sección de menú y el caché
 */
export async function updateMenuSection(cookies: AstroCookies, sectionId: string, updates: any) {
	const supabase = createServerClient(cookies);
	const userId = await getUserId(cookies);

	const { data, error } = await supabase.from('menu_sections').update(updates).eq('id', sectionId).select().single();

	if (error) {
		throw error;
	}

	// Actualizar caché
	if (userId && data) {
		updateCachedMenuSection(sectionId, data, userId);
	}

	return data;
}

/**
 * Elimina una sección de menú y actualiza el caché
 */
export async function deleteMenuSection(cookies: AstroCookies, sectionId: string) {
	const supabase = createServerClient(cookies);
	const userId = await getUserId(cookies);

	const { error } = await supabase.from('menu_sections').delete().eq('id', sectionId);

	if (error) {
		throw error;
	}

	// Actualizar caché
	if (userId) {
		removeCachedMenuSection(sectionId, userId);
	}

	return { success: true };
}

/**
 * Crea un nuevo item de menú y actualiza el caché
 */
export async function createMenuItem(cookies: AstroCookies, itemData: any) {
	const supabase = createServerClient(cookies);
	const userId = await getUserId(cookies);

	const { data, error } = await supabase
		.from('menu_items')
		.insert(itemData)
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
		.single();

	if (error) {
		throw error;
	}

	// Actualizar caché
	if (userId && data) {
		addCachedMenuItem(data, userId);
	}

	return data;
}

/**
 * Actualiza un item de menú y el caché
 */
export async function updateMenuItem(cookies: AstroCookies, itemId: string, updates: any) {
	const supabase = createServerClient(cookies);
	const userId = await getUserId(cookies);

	const { data, error } = await supabase
		.from('menu_items')
		.update(updates)
		.eq('id', itemId)
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
		.single();

	if (error) {
		throw error;
	}

	// Actualizar caché
	if (userId && data) {
		updateCachedMenuItem(itemId, data, userId);
	}

	return data;
}

/**
 * Elimina un item de menú y actualiza el caché
 */
export async function deleteMenuItem(cookies: AstroCookies, itemId: string) {
	const supabase = createServerClient(cookies);
	const userId = await getUserId(cookies);

	const { error } = await supabase.from('menu_items').delete().eq('id', itemId);

	if (error) {
		throw error;
	}

	// Actualizar caché
	if (userId) {
		removeCachedMenuItem(itemId, userId);
	}

	return { success: true };
}

/**
 * Obtiene items de menú por ID de sección
 */
export async function getMenuItems(cookies: AstroCookies, sectionId: string, includeInactive = false) {
	const userId = await getUserId(cookies);

	// Intentar usar caché
	if (userId) {
		const cachedItems = getCachedMenuItems(userId);
		if (cachedItems) {
			const filtered = cachedItems.filter((item) => item.menu_section_id === sectionId);
			return includeInactive ? filtered : filtered.filter((item) => item.active);
		}
	}

	// Fallback a request directo
	const supabase = createServerClient(cookies);

	let query = supabase.from('menu_items').select('*').eq('menu_section_id', sectionId).order('display_order', { ascending: true });

	if (!includeInactive) {
		query = query.eq('active', true);
	}

	const { data, error } = await query;

	if (error) {
		console.error('Error fetching menu items:', error);
		return [];
	}

	return data || [];
}

/**
 * Obtiene items de menú por sección (usa caché si está disponible)
 */
export async function getMenuItemsBySection(cookies: AstroCookies, sectionSlug: string) {
	const userId = await getUserId(cookies);

	// Intentar usar caché
	if (userId) {
		const cachedItems = getCachedMenuItems(userId);
		const cachedSections = getCachedMenuSections(userId);

		if (cachedItems && cachedSections) {
			const section = cachedSections.find((s) => s.slug === sectionSlug);
			if (section) {
				return cachedItems.filter((item) => item.menu_section_id === section.id && item.active);
			}
		}
	}

	// Fallback a request directo
	const supabase = createServerClient(cookies);

	const { data: section } = await supabase.from('menu_sections').select('id').eq('slug', sectionSlug).single();

	if (!section) return [];

	const { data, error } = await supabase.from('menu_items').select('*').eq('menu_section_id', section.id).eq('active', true).order('display_order', { ascending: true });

	if (error) {
		console.error('Error fetching menu items:', error);
		return [];
	}

	return data || [];
}

/**
 * Convierte un item de la base de datos al formato MenuItem
 */
export function dbItemToItem(dbItem: any) {
	return {
		id: dbItem.id,
		translate: {
			es: {
				title: dbItem.title_es,
				description: dbItem.description_es || undefined,
			},
			en: {
				title: dbItem.title_en,
				description: dbItem.description_en || undefined,
			},
		},
		price: dbItem.price,
		category: dbItem.category || undefined,
		active: dbItem.active,
	};
}

/**
 * Convierte una sección de la base de datos al formato MenuSection
 */
export function dbSectionToSection(dbSection: any, items: any[] = []) {
	return {
		title: {
			es: dbSection.title_es,
			en: dbSection.title_en,
		},
		image: dbSection.image || '',
		items: items,
		active: dbSection.active,
		slug: dbSection.slug,
	};
}
