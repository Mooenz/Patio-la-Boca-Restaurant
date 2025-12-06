// Data structure
export interface MenuItem {
	id: number;
	translate: {
		es: { title: string; description?: string };
		en: { title: string; description?: string };
	};
	price: string;
	category?: string;
}

export interface MenuSection {
	title: {
		es: string;
		en: string;
	};
	image: string;
	items: MenuItem[];
}

const section: MenuSection = {
	title: {
		es: 'Sugerencia',
		en: 'Suggestion',
	},
	image: '/images/Sugerencias.jpg',
	items: [
		{
			id: 1,
			translate: {
				es: {
					title: 'Alfajor de Queso de Cabra',
					description: 'Entre dos Medallones de Lomo, Bañado en Tzatziki Griego, Acompañado de Papas Españolas.',
				},
				en: {
					title: 'Goat Cheese Alfajor',
					description: 'Two beef tenderloin medallions layered with goat cheese, topped with Greek tzatziki and served with Spanish-style potatoes.',
				},
			},
			price: '$39.900',
		},
		{
			id: 2,
			translate: {
				es: {
					title: 'Capeletis de Cordero',
					description: 'Queso Azul y Nueces con crema de hongos frescos.',
				},
				en: {
					title: 'Lamb Capelettis',
					description: 'Filled with blue cheese and walnuts, served with a fresh mushroom cream sauce.',
				},
			},
			price: '$24.100',
		},
		{
			id: 3,
			translate: {
				es: {
					title: 'Sorrentinos',
					description: 'Con Masa de Morrón ahumado rellenos de Bondiola braseada hechos al hierro, acompañado de aceitunas negras, tomatitos cherry, rucula y escamas de parmesano.',
				},
				en: {
					title: 'Sorrentinos',
					description: 'Smoked red pepper pasta filled with braised pork, served with black olives, cherry tomatoes, arugula, and shaved Parmesan.',
				},
			},
			price: '$23.800',
		},
		{
			id: 4,
			translate: {
				es: {
					title: 'Panzottis',
					description: 'Con Masa de Zanahoria ahumada rellenos de Ternera desmechada con crema de Brocoli.',
				},
				en: {
					title: 'Panzottis',
					description: 'Smoked carrot dough stuffed with shredded veal, served with a creamy broccoli sauce.',
				},
			},
			price: '$22.800',
		},
		{
			id: 5,
			translate: {
				es: {
					title: 'Sorrentinos Caprese',
					description: 'Albahaca, Cherry y mozzarella Bocconcino hechos al hierro con aceite de oliva, tomates Cherry y terminados con Bocconcino.',
				},
				en: {
					title: 'Caprese Sorrentinos',
					description: 'Stuffed with basil, confit cherry tomatoes, and bocconcini mozzarella; grilled in olive oil and topped with fresh cherry tomatoes and bocconcini.',
				},
			},
			price: '$23.100',
		},
		{
			id: 6,
			translate: {
				es: {
					title: 'Abadejo',
					description: 'A la plancha con verdeo y aceite de jenjibre con papas, zanahorias y brócoli al natura.',
				},
				en: {
					title: 'Grilled Haddock',
					description: 'Grilled with scallions and ginger oil, served with boiled potatoes, carrots, and naturally steamed broccoli.',
				},
			},
			price: '$28.500',
		},
		{
			id: 7,
			translate: {
				es: {
					title: 'Souvlakia con Ensalada Griega',
					description: 'Trozos de carne de cerdo marinados con aceite de oliva, limón, orégano o tomillo, sal y pimienta a la parrilla acompañado de tomates, pepino, pimiento morrón, cebolla y queso feta.',
				},
				en: {
					title: 'Souvlakia with Greek Salad',
					description: 'Grilled pork chunks marinated in olive oil, lemon, oregano or thyme, salt, and pepper, served with tomatoes, cucumber, bell pepper, onion, and feta cheese.',
				},
			},
			price: '$23.500',
			category: 'menu_chipriota',
		},
		{
			id: 8,
			translate: {
				es: {
					title: 'Moussaka',
					description: 'Berenjena y carne picada de cordero, en capas, con tomates confitados y capa de bechamel.',
				},
				en: {
					title: 'Moussaka',
					description: 'Layered eggplant and minced lamb with confit tomatoes, topped with a béchamel sauce.',
				},
			},
			price: '$24.200',
			category: 'menu_chipriota',
		},
		{
			id: 9,
			translate: {
				es: {
					title: 'Kleftiko',
					description: 'Cordero braseado marinado con aceite de oliva, ajo, cebolla y limón acompañado con papas y yogurt.',
				},
				en: {
					title: 'Kleftiko',
					description: 'Braised lamb marinated in olive oil, garlic, onion, and lemon, served with potatoes and yogurt.',
				},
			},
			price: '$26.500',
			category: 'menu_chipriota',
		},
		{
			id: 10,
			translate: {
				es: {
					title: 'Ravioli',
					description: 'Pasta rellena de halloumi rallado, ricotta, huevos y menta.',
				},
				en: {
					title: 'Ravioli',
					description: 'Pasta filled with grated halloumi, ricotta, eggs, and mint.',
				},
			},
			price: '$23.000',
			category: 'menu_chipriota',
		},
	],
};

export default section;
