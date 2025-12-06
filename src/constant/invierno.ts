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

export const inviernoSection: MenuSection = {
	title: {
		es: 'Platos de Invierno',
		en: 'Winter Dishes',
	},
	image: '/images/invierno.jpeg',
	items: [
		{
			id: 0,
			translate: {
				es: {
					title: 'Osobuco Braseado con Cremoso de Batata y Cebolla Caramelizada',
				},
				en: {
					title: 'Braised Osso Buco with Sweet Potato Purée and Caramelized Onion',
				},
			},
			price: '$4.950',
		},
		{
			id: 1,
			translate: {
				es: {
					title: 'Guiso de Lentejas',
				},
				en: {
					title: 'Lentil Stew',
				},
			},
			price: '$3.850',
		},
		{
			id: 2,
			translate: {
				es: {
					title: 'Colación Sopa Crema de Cebolla',
				},
				en: {
					title: 'Creamy Onion Soup',
				},
			},
			price: '$2.450',
		},
	],
};
