'use client';

import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
	PrevButton,
	NextButton,
	usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'


function Card({ slide }: any) {
	return (
		<div className="card">
			<h1 className="text-lg font-bold">{slide.title}</h1>
			<img src={slide.gif} alt={slide.title} className="card-image" />
		</div>
	);
}


const EmblaCarousel = (props: any) => {
	const { slides, options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options)


	if (!slides) {
		return ("Loading")
	}

	return (
		<section className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((slide: any, index: any) => (
						<div className="embla__slide" key={index}>
							{/* <div className="embla__slide__number"></div> */}
							<Card key={index} slide={slide} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default EmblaCarousel
