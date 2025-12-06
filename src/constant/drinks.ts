import type { ImageMetadata } from 'astro';
import drinksImage from '@/assets/images/Drinks.jpg';

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

const bebidasSection: MenuSection = {
	title: {
		es: 'Bebidas',
		en: 'Drinks',
	},
	image: drinksImage,
	items: [
		{
			id: 0,
			translate: {
				es: { title: 'Gaseosa línea Coca-Cola 500cc.' },
				en: { title: 'Coca-Cola Soft Drink 500ml' },
			},
			price: '$4.000',
		},
		{
			id: 1,
			translate: {
				es: { title: 'Agua saborizada Levite' },
				en: { title: 'Flavored Water (Levite)' },
			},
			price: '$4.000',
		},
		{
			id: 2,
			translate: {
				es: { title: 'Agua c/s gas' },
				en: { title: 'Still or Sparkling Water' },
			},
			price: '$3.300',
		},
		{
			id: 3,
			translate: {
				es: { title: 'Vodka con Naranja' },
				en: { title: 'Vodka with Orange Juice' },
			},
			price: '$9.600',
		},
		{
			id: 4,
			translate: {
				es: { title: 'Cerveza Artesanal Rubia pinta 500cc' },
				en: { title: 'Craft Blonde Beer – 500ml Pint' },
			},
			price: '$5.500',
		},
		{
			id: 5,
			translate: {
				es: { title: 'Aperol Spritz' },
				en: { title: 'Aperol Spritz' },
			},
			price: '$7.600',
		},
		{
			id: 6,
			translate: {
				es: { title: 'Fernet Branca con Coca' },
				en: { title: 'Fernet Branca with Coke' },
			},
			price: '$7.600',
		},
		{
			id: 7,
			translate: {
				es: { title: 'Campari Bitter (Italia) con Naranja o Tónica' },
				en: { title: 'Campari Bitter (Italy) with Orange Juice or Tonic' },
			},
			price: '$7.600',
		},
		{
			id: 8,
			translate: {
				es: { title: 'Gin / Vodka & Tonic' },
				en: { title: 'Gin or Vodka & Tonic' },
			},
			price: '$7.600',
		},
		{
			id: 9,
			translate: {
				es: { title: 'Gin Beefeater / Vodka Absolut con Naranja o Tónica' },
				en: { title: 'Beefeater Gin / Absolut Vodka with Orange Juice or Tonic' },
			},
			price: '$9.600',
		},
		{
			id: 10,
			translate: {
				es: { title: 'Vermut (Cinzano o Gancia con Soda)' },
				en: { title: 'Vermouth (Cinzano or Gancia) with Soda' },
			},
			price: '$7.100',
		},
		{
			id: 11,
			translate: {
				es: { title: 'Espumante - Sparkling Wine' },
				en: { title: 'Sparkling Wine' },
			},
			price: '$16.500',
		},
		{
			id: 12,
			translate: {
				es: { title: 'Whisky The Glenlivet' },
				en: { title: 'The Glenlivet Whisky' },
			},
			price: '$14.500',
		},
		{
			id: 13,
			translate: {
				es: { title: 'Café Expreso' },
				en: { title: 'Espresso' },
			},
			price: '$3.200',
		},
		{
			id: 14,
			translate: {
				es: { title: 'Café Americano' },
				en: { title: 'Americano Coffee' },
			},
			price: '$3.200',
		},
		{
			id: 15,
			translate: {
				es: { title: 'Café con Leche' },
				en: { title: 'Coffee with Milk' },
			},
			price: '$3.200',
		},
		{
			id: 16,
			translate: {
				es: { title: 'Café Doble' },
				en: { title: 'Double Espresso' },
			},
			price: '$4.200',
		},
		{
			id: 17,
			translate: {
				es: { title: 'Té (caja con variedad)' },
				en: { title: 'Tea (Assorted Box)' },
			},
			price: '$2.900',
		},
	],
};

export default bebidasSection;
