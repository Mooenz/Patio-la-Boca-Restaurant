import type { ImageMetadata } from 'astro';
import sandwichImage from '@/assets/images/sandwich.jpg';

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

const sandwichSection: MenuSection = {
	title: {
		es: 'Sándwich',
		en: 'Sandwich',
	},
	image: sandwichImage,
	items: [
		{
			id: 0,
			translate: {
				es: {
					title: 'Choripán Extra',
					description: 'Con lechuga, tomate y fritas',
				},
				en: {
					title: 'Extra Choripán',
					description: 'With lettuce, tomato, and fries',
				},
			},
			price: '$13.200',
		},
		{
			id: 1,
			translate: {
				es: {
					title: 'Bondiola',
					description: 'Con lechuga, tomate y fritas',
				},
				en: {
					title: 'Pork Shoulder (Bondiola)',
					description: 'With lettuce, tomato, and fries',
				},
			},
			price: '$14.700',
		},
		{
			id: 2,
			translate: {
				es: {
					title: 'Hamburguesa casera',
					description: 'Con queso, lechuga, tomate y fritas',
				},
				en: {
					title: 'Homemade hamburger',
					description: 'With cheese, lettuce, tomato, and fries',
				},
			},
			price: '$16.300',
		},
	],
};

export default sandwichSection;
