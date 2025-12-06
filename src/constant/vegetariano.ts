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

const vegetarianoSection: MenuSection = {
	title: {
		es: 'Vegetariano',
		en: 'Vegetarian',
	},
	image: '/images/Vegetariano.jpg',
	items: [
		{
			id: 0,
			translate: {
				es: {
					title: 'Cazuela de Vegetales',
				},
				en: {
					title: 'Vegetable Casserole',
				},
			},
			price: '$16.500',
		},
		{
			id: 1,
			translate: {
				es: {
					title: 'Wok de Arroz y Vegetales',
				},
				en: {
					title: 'Rice and Vegetable Wok',
				},
			},
			price: '$16.500',
		},
		{
			id: 2,
			translate: {
				es: {
					title: 'Risotto de Hongos',
				},
				en: {
					title: 'Mushroom Risotto',
				},
			},
			price: '$24.000',
		},
	],
};

export default vegetarianoSection;
