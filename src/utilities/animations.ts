import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

// Registrar plugins una sola vez
gsap.registerPlugin(ScrollTrigger, SplitText);

export function scrollItems(item: string): void {
	// Convertimos la lista a un array de elementos con tipado correcto
	const items = gsap.utils.toArray(item) as HTMLElement[];

	items.forEach((el: HTMLElement) => {
		gsap.fromTo(
			el,
			{
				scale: 0.9,
				opacity: 0.5,
			},
			{
				scale: 1,
				opacity: 1,
				ease: 'none',
				scrollTrigger: {
					trigger: el,
					start: 'top 100%',
					end: 'top 70%',
					scrub: true,
					markers: false,
				},
			}
		);
	});
}

export { gsap, ScrollTrigger, SplitText };
