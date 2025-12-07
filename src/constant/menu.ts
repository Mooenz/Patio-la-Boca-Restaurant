interface LocaleOptions {
	home: string;
	suggestions: string;
	menu: string;
	drinks: string;
	fish: string;
	start: string;
	grilled: string;
	sideDishes: string;
	homemadePasta: string;
	sauce: string;
	vegetarian: string;
	milanesas: string;
	sandwiches: string;
	desserts: string;
	wine: string;
}

const options: Record<string, LocaleOptions> = {
	es: {
		home: 'Inicio',
		suggestions: 'Sugerencias',
		menu: 'Menú',
		drinks: 'Bebidas',
		fish: 'Pescado y mariscos',
		start: 'Entradas',
		grilled: 'Parrilla',
		sideDishes: 'Acompañamientos',
		homemadePasta: 'Pasta casera',
		sauce: 'Salsas',
		vegetarian: 'Vegetariano',
		milanesas: 'Milanesas',
		sandwiches: 'Sándwiches',
		desserts: 'Postres',
		wine: 'Vinos',
	},
	en: {
		home: 'Home',
		suggestions: 'Suggestions',
		menu: 'Menu',
		drinks: 'Drinks',
		fish: 'Fish and seafood dishes',
		start: 'Starters',
		grilled: 'Grilled meat',
		sideDishes: 'Side dishes',
		homemadePasta: 'Homemade pasta',
		sauce: 'Sauces',
		vegetarian: 'Vegetarian',
		milanesas: 'Breaded cutlets',
		sandwiches: 'Sandwiches',
		desserts: 'Desserts',
		wine: 'Wines',
	},
};

export { options };