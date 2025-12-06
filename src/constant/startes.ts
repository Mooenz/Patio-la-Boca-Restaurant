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

const section: MenuSection = {
	title: {
		es: 'Entradas',
		en: 'Starters',
	},
	image: '/images/chori.jpg',
	items: [
		{
			id: 0,
			translate: {
				es: {
					title: 'Empanada de Carne',
					description: 'o Jamón y Queso',
				},
				en: {
					title: 'Beef Empanada',
					description: 'or Ham & Cheese',
				},
			},
			price: '$4.100',
		},
		{
			id: 1,
			translate: {
				es: {
					title: 'Empanada de Carne',
					description: 'Cortada a cuchillo',
				},
				en: {
					title: 'Beef Empanada',
					description: 'Cut with a knife',
				},
			},
			price: '$4.200',
		},
		{
			id: 2,
			translate: {
				es: {
					title: 'Empanada de Cordero',
				},
				en: {
					title: 'Lamb Empanada',
				},
			},
			price: '$4.300',
		},
		{
			id: 3,
			translate: {
				es: {
					title: 'Chorizo',
				},
				en: {
					title: 'Chorizo Sausage',
				},
			},
			price: '$4.900',
		},
		{
			id: 4,
			translate: {
				es: {
					title: 'Morcilla',
				},
				en: {
					title: 'Blood Sausage',
				},
			},
			price: '$4.800',
		},
		{
			id: 5,
			translate: {
				es: {
					title: 'Provoleta',
				},
				en: {
					title: 'Grilled Provolone Cheese',
				},
			},
			price: '$11.500',
		},
		{
			id: 6,
			translate: {
				es: {
					title: 'Provoleta de Cabra',
				},
				en: {
					title: 'Goat Provolone Cheese',
				},
			},
			price: '$17.500',
		},
		{
			id: 7,
			translate: {
				es: {
					title: 'Menú Chipriota: Kupepia',
					description: 'Hojas de parra rellenas de arroz, hierbas y carne de cordero molida',
				},
				en: {
					title: 'Cypriot Menu: Kupepia',
					description: 'Vine leaves stuffed with rice, herbs, and ground lamb',
				},
			},
			price: '$6.600',
			category: 'menu_chipriota',
		},
		{
			id: 8,
			translate: {
				es: {
					title: 'Menú Chipriota: Halloumi',
					description: 'Queso de leche de cabra y de oveja, salado a la plancha o frito',
				},
				en: {
					title: 'Cypriot Menu: Halloumi',
					description: 'Grilled or fried cheese made from goat and sheep milk',
				},
			},
			price: '$18.000',
			category: 'menu_chipriota',
		},
	],
};

export default section;
