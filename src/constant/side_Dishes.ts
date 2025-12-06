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

export const guarniciones: MenuSection = {
	title: {
		es: 'Guarniciones',
		en: 'Side Dishes',
	},
	image: '/images/c.jpg',
	items: [
		{
			id: 0,
			translate: {
				es: { title: 'Ensalada Mixta', description: 'Tomate, Lechuga, Cebolla' },
				en: { title: 'Mixed Salad', description: 'Tomato, Lettuce, Onion' },
			},
			price: '$7.100',
		},
		{
			id: 1,
			translate: {
				es: { title: 'Ensalada Rúcula y Parmesano' },
				en: { title: 'Arugula and Parmesan Salad' },
			},
			price: '$7.600',
		},
		{
			id: 2,
			translate: {
				es: { title: 'Ensalada de Zanahoria y Huevo' },
				en: { title: 'Carrot and Egg Salad' },
			},
			price: '$7.100',
		},
		{
			id: 3,
			translate: {
				es: {
					title: 'Ensalada de Espinaca',
					description: 'Con cubos de queso azul, huevos de codorniz, aceitunas verdes, reducción de miel, vinagre y aceite de oliva',
				},
				en: {
					title: 'Spinach salad',
					description: 'With blue cheese cubes, quail eggs, green olives, honey reduction, vinegar, and olive oil',
				},
			},
			price: '$11.000',
		},
		{
			id: 4,
			translate: {
				es: { title: 'Ensalada César' },
				en: { title: 'Caesar Salad' },
			},
			price: '$13.000',
		},
		{
			id: 5,
			translate: {
				es: { title: 'Papas, Batatas Fritas' },
				en: { title: 'French Fries, Sweet Potato Fries' },
			},
			price: '$7.100',
		},
		{
			id: 6,
			translate: {
				es: { title: 'Tortilla de Papas' },
				en: { title: 'Potato Omelette' },
			},
			price: '$11.000',
		},
		{
			id: 7,
			translate: {
				es: { title: 'Tortilla de Papas con Chorizo Colorado' },
				en: { title: 'Potato Omelette with Red Chorizo' },
			},
			price: '$13.500',
		},
		{
			id: 8,
			translate: {
				es: { title: 'Puré de Papas o Calabaza' },
				en: { title: 'Mashed Potatoes or Pumpkin' },
			},
			price: '$7.200',
		},
		{
			id: 9,
			translate: {
				es: { title: 'Arroz' },
				en: { title: 'Rice' },
			},
			price: '$7.100',
		},
	],
};

export default guarniciones;
