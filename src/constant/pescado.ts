import type { ImageMetadata } from 'astro';
import pescadoImage from '@/assets/images/pescado.jpg';

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
	image: ImageMetadata;
	items: MenuItem[];
}

const section: MenuSection = {
	title: {
		es: 'Platos de Pescados y Mariscos',
		en: 'Fish and Seafood Dishes',
	},
	image: pescadoImage,
	items: [
		{
			id: 0,
			translate: {
				es: {
					title: 'Filete de Truchon',
					description: 'Cocinado con aceite de oliva, limón y morrón, acompañado de hongos Portobello apanados rellenos de queso',
				},
				en: {
					title: 'Trout fillet',
					description: 'Cooked with olive oil, lemon, and green pepper, served with breaded Portobello mushrooms stuffed with cheese',
				},
			},
			price: '$34.200',
		},
		{
			id: 1,
			translate: {
				es: {
					title: 'Curry de Langostinos',
					description: 'Acompañado de arroz basmati y nueces',
				},
				en: {
					title: 'Prawn curry',
					description: 'Served with basmati rice and walnuts',
				},
			},
			price: '$34.200',
		},
		{
			id: 2,
			translate: {
				es: {
					title: 'Raviolones de Casón',
					description: 'En salsa de ostras',
				},
				en: {
					title: 'Casón ravioli',
					description: 'With oyster sauce',
				},
			},
			price: '$24.200',
		},
		{
			id: 3,
			translate: {
				es: {
					title: 'Fideos con Frutos de Mar',
					description: 'Langostinos, tentáculos de calamar y mejillones',
				},
				en: {
					title: 'Pasta with seafood',
					description: 'Prawns, squid tentacles, and mussels',
				},
			},
			price: '$29.000',
		},
		{
			id: 4,
			translate: {
				es: {
					title: 'Abadejo a la plancha',
					description: 'Con verdeo y aceite de jenjibre con papas, zanahorias y brócoli al natural',
				},
				en: {
					title: 'Grilled haddock',
					description: 'With scallions and ginger oil, served with potatoes, carrots, and naturally steamed broccoli',
				},
			},
			price: '$29.000',
		},
	],
};

export default section;
