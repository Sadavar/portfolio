'use client';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './styles.css';

export default function SneakPeak() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
	});

	const items = [
		{ title: 'Card 1', gif: '/assets/gifs/ar_nav.gif' },
		{ title: 'Card 2', gif: '/assets/gifs/Chessir.gif' },
		{ title: 'Card 3', gif: '/assets/gifs/Helix.gif' },
	];

	return (
		<>
			<div className="embla">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						{items.map((item, index) => (
							<div className="embla__slide" key={index}>
								<div className="card">
									<div className="card-title">{item.title}</div>
									<img src={item.gif} alt={item.title} className="card-image" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}