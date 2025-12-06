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

export const parrilla: MenuSection = {
	title: {
		es: 'Parrilla',
		en: 'Grilled Meats',
	},
	image: '/images/Parrilla.jpg',
	items: [
		{
			id: 0,
			translate: {
				es: { title: 'Asado 600 gr' },
				en: { title: 'Short Ribs 600 gr' },
			},
			price: '$32.000',
		},
		{
			id: 1,
			translate: {
				es: { title: 'Vacío 600 gr' },
				en: { title: 'Flank Steak 600 gr' },
			},
			price: '$34.600',
		},
		{
			id: 2,
			translate: {
				es: { title: 'Bife de Chorizo 500 gr' },
				en: { title: 'Ribeye Steak 500 gr' },
			},
			price: '$34.600',
		},
		{
			id: 3,
			translate: {
				es: { title: 'Lomo 400 gr' },
				en: { title: 'Tenderloin 400 gr' },
			},
			price: '$36.800',
		},
		{
			id: 4,
			translate: {
				es: { title: 'Bife con Lomo más de 800 gr' },
				en: { title: 'T-Bone over 800 gr' },
			},
			price: '$43.500',
		},
		{
			id: 5,
			translate: {
				es: { title: 'Pechuga Grille' },
				en: { title: 'Grilled Chicken Breast' },
			},
			price: '$16.000',
		},
		{
			id: 6,
			translate: {
				es: {
					title: 'Tabla para 3 o 4 personas',
					description: 'Asado banderita, vacío, bondiola, pollo, chichulín, 1 chorizo, 1 morcilla.',
				},
				en: {
					title: 'Grill Platter for 3–4',
					description: 'Short Ribs, Flank Steak, Pork Shoulder, Chicken, Chinchulín, 1 Chorizo, 1 Blood Sausage',
				},
			},
			price: '$76.000',
		},
		{
			id: 7,
			translate: {
				es: {
					title: 'Tabla Premium para 2 personas',
					description: 'Lomo, Bife de Chorizo, Asado Banderita',
				},
				en: {
					title: 'Premium Grill for 2',
					description: 'Tenderloin, Ribeye Steak, Short Ribs',
				},
			},
			price: '$60.000',
		},
		{
			id: 8,
			translate: {
				es: {
					title: 'Tabla Mix para 2',
					description: 'Lomo, Bife de Chorizo, Asado Banderita, Vacío, Bondiola, Chinchulín, 1 Chorizo, 1 Morcilla',
				},
				en: {
					title: 'Mixed Grill for 2',
					description: 'Tenderloin, Ribeye Steak, Short Ribs, Flank Steak, Pork Shoulder, Chinchulín, 1 Chorizo, 1 Blood Sausage',
				},
			},
			price: '$55.200',
		},
		{
			id: 9,
			translate: {
				es: {
					title: 'Cordero Patagonico al Asador ',
					description: 'Para 10 personas (Solo con reserva, consultar detalles)',
				},
				en: {
					title: 'Patagonian Lamb on the Spit',
					description: 'For 10 people (Reservation only, ask for details)',
				},
			},
			price: '$Consultar',
		},
	],
};

export default parrilla;
