import type { ImageMetadata } from 'astro';
import pescadoImage from '@/assets/images/Pastas.jpg';

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

export const pastaCasera: MenuSection = {
	title: {
		es: 'Pasta Casera',
		en: 'Homemade Pasta',
	},
	image: pescadoImage,
	items: [
		{
			id: 0,
			price: '$12.600',
			translate: {
				es: { title: 'Fideos o Cinta' },
				en: { title: 'Spaghetti or Ribbon Pasta' },
			},
		},
		{
			id: 1,
			price: '$16.800',
			translate: {
				es: { title: 'Sorrentinos de Jamon y Queso' },
				en: { title: 'Ham & Cheese Sorrentinos' },
			},
		},
		{
			id: 2,
			price: '$15.800',
			translate: {
				es: { title: 'Raviolones de Verdura y Ricota' },
				en: { title: 'Vegetable & Ricotta Ravioloni' },
			},
		},
		{
			id: 3,
			price: '$17.500',
			translate: {
				es: {
					title: 'Sorrentinos con Masa de Morrón ahumado',
					description: 'Rellenos de Bondiola braseada',
				},
				en: {
					title: 'Sorrentinos with Smoked Red Pepper Dough',
					description: 'Filled with Braised Pork Shoulder',
				},
			},
		},
		{
			id: 4,
			price: '$17.500',
			translate: {
				es: { title: 'Capeletis de Cordero',
							description: 'con Queso Azul y Nueces'
				 },
				en: { title: 'Lamb Capeletis',
							description: 'With Blue Cheese & Walnuts'
				 },
			},
		},
		{
			id: 5,
			price: '$16.800',
			translate: {
				es: {
					title: 'Panzottis con Masa de Zanahoria ahumada',
					description: 'rellenos de Ternera desmechada',
				},
				en: {
					title: 'Panzottis with Smoked Carrot Dough',
					description: 'filled with Shredded Veal',
				},
			},
		},
		{
			id: 6,
			price: '$16.800',
			translate: {
				es: { title: 'Raviolones de Casón' },
				en: { title: 'Dogfish Ravioloni' },
			},
		},
		{
			id: 7,
			price: '$23.000',
			translate: {
				es: {
					title: 'Ravioli',
					description: 'Rellenos de halloumi rallado, ricota y menta, servidos con aceite de oliva, tomates cherry, menta y lascas de queso de cabra',
				},
				en: {
					title: 'Ravioli',
					description: 'Filled with grated halloumi, ricotta & mint, served with olive oil, cherry tomatoes, mint, and goat cheese flakes',
				},
			},
		},
	],
};

export default pastaCasera;
