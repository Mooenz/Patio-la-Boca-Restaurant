// Tipos actualizados con campo de estado
export interface MenuItem {
	id: number;
	translate: {
		es: { title: string; description?: string };
		en: { title: string; description?: string };
	};
	price: string;
	category?: string;
	active?: boolean; // Nuevo campo
}

export interface MenuSection {
	title: {
		es: string;
		en: string;
	};
	image: string;
	items: MenuItem[];
	active?: boolean; // Nuevo campo
	slug?: string; // Identificador único para la sección
}

// Tipos para Supabase
export interface MenuSectionDB {
	id: string;
	slug: string;
	title_es: string;
	title_en: string;
	image: string;
	active: boolean;
	display_order: number;
	created_at: string;
	updated_at: string;
}

export interface MenuItemDB {
	id: string;
	menu_section_id: string;
	title_es: string;
	title_en: string;
	description_es: string | null;
	description_en: string | null;
	price: string;
	category: string | null;
	active: boolean;
	display_order: number;
	created_at: string;
	updated_at: string;
}
