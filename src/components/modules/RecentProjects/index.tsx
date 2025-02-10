'use client';

import React from 'react';
import EmblaCarousel from './EmblaCarousel';
import './css/embla.css';

const OPTIONS = { loop: true };
const desktopSlides = [
	{
		title: "Chessir - AI Chess Trainer",
		gif: "/assets/gifs/Chessir.gif"
	},
	{
		title: "NASA S.U.I.T.S",
		gif: "/assets/gifs/ar_nav.gif"
	},
	{
		title: "Helix - Agentic AI Assistant",
		gif: "/assets/gifs/Helix.gif"
	},

];

const mobileSlides = [
	{
		title: "NASA S.U.I.T.S",
		gif: "/assets/gifs/ar_nav.gif"
	},
	{
		title: "Chessir - AI Chess Trainer",
		gif: "/assets/gifs/Chessir.gif"
	},
	{
		title: "Helix - Agentic AI Assistant",
		gif: "/assets/gifs/Helix.gif"
	},

];

function Card({ slide }: any) {
	return (
		<div className="card">
			<h1 className="text-lg font-bold">{slide.title}</h1>
			<img src={slide.gif} alt={slide.title} className="card-image" />
		</div>
	);
}

const RecentProjects = () => {
	return (
		<div className="container pb-5" id="projects">
			<h2 className="text-2xl font-bold mb-6">Recent Projects</h2>
			<div className="recent-projects">
				<div className="carousel-container">
					<EmblaCarousel slides={mobileSlides} options={OPTIONS} />
				</div>
				<div className="three-cards-layout">
					{desktopSlides.map((slide: any, index: any) => (
						<Card key={index} slide={slide} />
					))}
				</div>
			</div>
		</div>
	)
};

export default RecentProjects;