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

const postresSection: MenuSection = {
	title: {
		es: 'Postres',
		en: 'Desserts',
	},
	image: '/images/Postres.jpg',
	items: [
		{
			id: 0,
			translate: {
				es: { title: 'Budín de Pan Casero' },
				en: { title: 'Homemade Bread Pudding' },
			},
			price: '$7.000',
		},
		{
			id: 1,
			translate: {
				es: { title: 'Flan Casero' },
				en: { title: 'Homemade Crème Caramel' },
			},
			price: '$7.000',
		},
		{
			id: 2,
			translate: {
				es: { title: 'Extras: Dulce de Leche o Crema' },
				en: { title: 'Add-ons: Dulce de Leche or Cream' },
			},
			price: '$1.700',
		},
		{
			id: 3,
			translate: {
				es: { title: 'Helado Almendrado' },
				en: { title: 'Almond Ice Cream' },
			},
			price: 'SIN STOCK',
		},
		{
			id: 4,
			translate: {
				es: { title: 'Chocotorta' },
				en: { title: 'Chocotorta', description: 'Chocolate Cookie Cake' },
			},
			price: '$9.500',
		},
		{
			id: 5,
			translate: {
				es: { title: 'Volcán de Chocolate con Bocha de Crema Americana' },
				en: { title: 'Chocolate Lava Cake with Vanilla Ice Cream' },
			},
			price: '$14.500',
		},
		{
			id: 6,
			translate: {
				es: { title: 'Tarta de Ricota' },
				en: { title: 'Ricotta Tart' },
			},
			price: 'SIN STOCK',
		},
		{
			id: 7,
			translate: {
				es: { title: 'Brownie Tibio con Nueces y Helado' },
				en: { title: 'Warm Walnut Brownie with Ice Cream' },
			},
			price: '$12.000',
		},
		{
			id: 8,
			translate: {
				es: { title: 'Bocha de Helado' },
				en: { title: 'Scoop of Ice Cream' },
			},
			price: '$5.000',
		},
		{
			id: 9,
			translate: {
				es: {
					title: 'Menú Chipriota: Lokmades con Helado',
					description: 'Bolas de masa fritas dulces, remojadas en almíbar y glaseadas con miel, acompañadas con bocha de helado',
				},
				en: {
					title: 'Cypriot Menu: Lokmades with Ice Cream',
					description: 'Sweet fried dough balls soaked in syrup and glazed with honey, served with ice cream',
				},
			},
			price: '$12.500',
		},
	],
};

export default postresSection;
