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

const milanesasSection: MenuSection = {
	title: {
		es: 'Milanesas',
		en: 'Breaded Dishes',
	},
	image: '/images/PuertaPatio.jpg',
	items: [
		{
			id: 0,
			translate: {
				es: {
					title: 'Milanesa de Bife de Chorizo',
				},
				en: {
					title: 'Breaded Sirloin Steak',
				},
			},
			price: '$25.500',
		},
		{
			id: 1,
			translate: {
				es: {
					title: 'Suprema de Pollo',
				},
				en: {
					title: 'Breaded Chicken Breast',
				},
			},
			price: '$16.500',
		},
		{
			id: 2,
			translate: {
				es: {
					title: 'Agregado: Napolitana o Fugazzeta',
				},
				en: {
					title: 'Add-on: Napolitana or Fugazzeta',
				},
			},
			price: '$3.900',
		},
		{
			id: 3,
			translate: {
				es: {
					title: 'Pollo al Verdeo o al Puerro',
					description: 'Acompañado de Papas Españolas',
				},
				en: {
					title: 'Chicken with Green Onion or Leek',
					description: 'Served with Spanish-style Potatoes',
				},
			},
			price: '$21.500',
		},
		{
			id: 4,
			translate: {
				es: {
					title: 'Pollo con Crema de Hongos',
					description: 'Acompañado de Papas Españolas',
				},
				en: {
					title: 'Chicken with Mushroom Cream',
					description: 'Served with Spanish-style Potatoes',
				},
			},
			price: '$23.500',
		},
	],
};

export default milanesasSection;
