import type { ImageMetadata } from 'astro';
import salsasImage from '@/assets/images/Salsas.jpg';

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

export const salsasSection: MenuSection = {
	title: {
		es: "Salsas",
		en: "Sauces",
	},
	image: salsasImage,
	items: [
		{
			id: 0,
			translate: {
				es: {
					title: "Fileto, Rossini, Pesto, Salsa Blanca",
				},
				en: {
					title: "Fileto, Rossini, Pesto, White Sauce",
				},
			},
			price: "$4.600",
		},
		{
			id: 1,
			translate: {
				es: {
					title: "Estofado, Bolognesa",
				},
				en: {
					title: "Stew, Bolognese",
				},
			},
			price: "$6.000",
		},
		{
			id: 2,
			translate: {
				es: {
					title: "Crema de Brócoli",
				},
				en: {
					title: "Cream of Broccoli",
				},
			},
			price: "$6.000",
		},
		{
			id: 3,
			translate: {
				es: {
					title: "Ragout de Hongos",
				},
				en: {
					title: "Mushroom Ragout",
				},
			},
			price: "$6.600",
		},
	],
};

export default salsasSection;