import type { ImageMetadata } from 'astro';
import WineImage from '@/assets/images/Wine.jpeg';

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

export const vinosSection: MenuSection = {
	title: {
		es: 'Vinos',
		en: 'Wines',
	},
	image: WineImage,
	items: [
		{
			id: 1500,
			translate: {
				es: { title: 'Dante Robino Extra Brut 750cc - Espumantes' },
				en: { title: 'Dante Robino Extra Brut 750cc - Sparkling Wine' },
			},
			price: '$15.500',
			category: 'Espumantes',
		},
		{
			id: 1501,
			translate: {
				es: { title: 'La Puerta Reserva 750cc - Petit Verdot' },
				en: { title: 'La Puerta Reserva 750cc - Petit Verdot' },
			},
			price: '$17.000',
			category: 'Petit Verdot',
		},
		{
			id: 1502,
			translate: {
				es: { title: 'Cavas de Crianza 750cc - Chardonnay' },
				en: { title: 'Cavas de Crianza 750cc - Chardonnay' },
			},
			price: '$14.000',
			category: 'Chardonnay',
		},
		{
			id: 1503,
			translate: {
				es: { title: 'Clara Benegas 750cc - Chardonnay' },
				en: { title: 'Clara Benegas 750cc - Chardonnay' },
			},
			price: '$16.500',
			category: 'Chardonnay',
		},
		{
			id: 1504,
			translate: {
				es: { title: 'Juan Benegas 750cc - Malbec' },
				en: { title: 'Juan Benegas 750cc - Malbec' },
			},
			price: '$16.500',
			category: 'Malbec',
		},
		{
			id: 1505,
			translate: {
				es: { title: 'Caelum 750cc - Malbec' },
				en: { title: 'Caelum 750cc - Malbec' },
			},
			price: '$18.000',
			category: 'Malbec',
		},
		{
			id: 1506,
			translate: {
				es: { title: 'Cavas de Crianza 750cc - Malbec' },
				en: { title: 'Cavas de Crianza 750cc - Malbec' },
			},
			price: '$14.000',
			category: 'Malbec',
		},
		{
			id: 1507,
			translate: {
				es: { title: 'Bataraz Reserva 750cc - Malbec' },
				en: { title: 'Bataraz Reserva 750cc - Malbec' },
			},
			price: '$24.500',
			category: 'Malbec',
		},
		{
			id: 1508,
			translate: {
				es: { title: 'Gran Vino Chañarmuyo 750cc - Malbec' },
				en: { title: 'Gran Vino Chañarmuyo 750cc - Malbec' },
			},
			price: '$23.000',
			category: 'Malbec',
		},
		{
			id: 1509,
			translate: {
				es: { title: 'Cumehue 750cc - (Bonarda/Suavignon))' },
				en: { title: 'Cumehue 750cc - Blend (Bonarda/Sauvignon)' },
			},
			price: '$17.600',
			category: 'Blend',
		},
		{
			id: 15010,
			translate: {
				es: { title: 'Elephant Gun 750cc - Malbec' },
				en: { title: 'Elephant Gun 750cc - Malbec' },
			},
			price: '$15.800',
			category: 'Malbec',
		},
		{
			id: 15011,
			translate: {
				es: { title: 'Zun Zun 750cc - Rose' },
				en: { title: 'Zun Zun 750cc - Rosé' },
			},
			price: '$19.500',
			category: 'Cabernet Franc',
		},
		{
			id: 15012,
			translate: {
				es: {
					title: 'Chañarmuyo 750cc (Cabernet Franc / Sauvignon) - Blend',
				},
				en: {
					title: 'Chañarmuyo 750cc (Cabernet Franc / Sauvignon) - Blend',
				},
			},
			price: '$15.000',
			category: 'Blend',
		},
		{
			id: 15013,
			translate: {
				es: { title: 'Finca La Anita 750cc - Petit Verdot, Malbec' },
				en: { title: 'Finca La Anita 750cc - Petit Verdot, Malbec' },
			},
			price: '$21.500',
			category: 'Petit Verdot',
		},
		{
			id: 15014,
			translate: {
				es: { title: 'Bataraz 750cc - Cabernet Franc' },
				en: { title: 'Bataraz 750cc - Cabernet Franc' },
			},
			price: '$17.500',
			category: 'Cabernet Franc',
		},
		{
			id: 15015,
			translate: {
				es: { title: 'Kamala 750cc - Pinot Noir' },
				en: { title: 'Kamala 750cc - Pinot Noir' },
			},
			price: '$13.500',
			category: 'Pinot Noir',
		},
		{
			id: 15016,
			translate: {
				es: { title: 'Finca La Anita 750cc - Pinot Noir, Cabernet Franc, Syrah' },
				en: {
					title: 'Finca La Anita 750cc - Pinot Noir, Cabernet Franc, Syrah',
				},
			},
			price: '$21.500',
			category: 'Blend',
		},
		{
			id: 15017,
			translate: {
				es: { title: 'Cristobal 750cc - Sangiovese' },
				en: { title: 'Cristobal 750cc - Sangiovese' },
			},
			price: '11,900',
			category: 'Sangiovese',
		},
		{
			id: 15018,
			translate: {
				es: { title: 'Vallisto 750cc - Tannat' },
				en: { title: 'Vallisto 750cc - Tannat' },
			},
			price: '$14.500',
			category: 'Tannat',
		},
		{
			id: 15019,
			translate: {
				es: { title: 'Miras 750cc - Merlot, Pinot Noir' },
				en: { title: 'Miras 750cc - Merlot, Pinot Noir' },
			},
			price: '21.900',
			category: 'Merlot, Pinot Noir',
		},
		{
			id: 15020,
			translate: {
				es: { title: 'Tomero 375cc - Malbec' },
				en: { title: 'Tomero 375cc - Malbec' },
			},
			price: '$9.500',
			category: 'Malbec',
		},
		{
			id: 15021,
			translate: {
				es: { title: 'Cumehue 750cc - Bonarda' },
				en: { title: 'Cumehue 750cc - Bonarda' },
			},
			price: '$15.200',
			category: 'Bonarda',
		},
		{
			id: 15022,
			translate: {
				es: { title: 'La Madrid 750cc - Carbernet Sauvignon' },
				en: { title: 'La Madrid 750cc - Cabernet Sauvignon' },
			},
			price: '$14.300',
			category: 'Cabernet Sauvignon',
		},
		{
			id: 15023,
			translate: {
				es: { title: 'Carmela Benegas 750cc - Rose' },
				en: { title: 'Carmela Benegas 750cc - Rosé' },
			},
			price: '$15.500',
			category: 'Rosé',
		},
		{
			id: 15024,
			translate: {
				es: { title: 'Dante Robino Extra Brut Espumante 750cc' },
				en: { title: 'Dante Robino Extra Brut Sparkling 750cc' },
			},
			price: '$15.500',
			category: 'Pinot Noir',
		},
		{
			id: 15025,
			translate: {
				es: { title: 'La Coupe - 750cc' },
				en: { title: 'La Coupe - 750cc' },
			},
			price: '$14.900',
			category: 'Syrah',
		},
		{
			id: 15026,
			translate: {
				es: { title: 'Castel Conegliano Prima Prova 750cc' },
				en: { title: 'Castel Conegliano Prima Prova 750cc' },
			},
			price: '$32.000',
			category: 'Espumante',
		},
		{
			id: 15027,
			translate: {
				es: { title: 'Erase Una Vez - 750cc' },
				en: { title: 'Erase Una Vez - 750cc' },
			},
			price: '$23.200',
			category: 'Criollo',
		},
		{
			id: 15028,
			translate: {
				es: { title: 'Vallisto - 750cc' },
				en: { title: 'Vallisto - 750cc' },
			},
			price: '$15.900',
			category: 'Criollo',
		},
		{
			id: 15029,
			translate: {
				es: { title: 'Lamadrid - 750cc' },
				en: { title: 'Lamadrid - 750cc' },
			},
			price: '$14.300',
			category: 'Bonarda',
		},
		{
			id: 15030,
			translate: {
				es: { title: 'Valle del Condor Taruca (Blend de Rosados)' },
				en: { title: 'Valle del Cóndor Taruca (Rosé Blend)' },
			},
			price: '$17.500',
			category: 'Rosé',
		},
		{
			id: 15031,
			translate: {
				es: { title: 'La Puerta 750cc' },
				en: { title: 'La Puerta 750cc' },
			},
			price: '$14.500',
			category: 'Espumantes',
		},
		{
			id: 15032,
			translate: {
				es: { title: 'Don Manuel Villafañe 750c' },
				en: { title: 'Don Manuel Villafañe 750c' },
			},
			price: '$18.500',
			category: 'Blanc Petit',
		},
		{
			id: 15033,
			translate: {
				es: { title: 'Copa de Vino (Tinto o Blanco)' },
				en: { title: 'Glass of Wine (Red or White)' },
			},
			price: '$5.200',
			category: 'Malbec',
		},
	],
};

export default vinosSection;
