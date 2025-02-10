'use client';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardTemplate from "../CardTemplate";

function Projects() {
	return (
		<div className="container" id="projects">
			<h2 className="text-2xl font-bold mb-6">Projects</h2>
			<Claws />
			<Chess />
			<Helix />
		</div>
	);
}

function Helix() {
	const title = "Helix - Agentic AI Assistant 🧬 🤖 🧑🏽‍💻️";
	const description =
		(
			<>
				This is a conversational agentic AI platform built to be an HR assistant for generating recruiting outreach steps.
				The backend uses Langgraph and Langchain to build the agentic infrastructure which is served over Flask, communicated via WebSocket, and stored with SQL.
				This was my first project learning about agentic AI and I enjoyed creating the nodes and edges to form a graph using Langgraph.
				The AI is able to make decisions using conditional edges which direct which nodes it lands on.
			</>
		)
	const technologies = ["Langgraph", "ReactJS", "Python Flask", "WebSocket", "SQL"];
	const images = [
		"/assets/gifs/Helix.gif",
	];
	const color = {
		via: "via-cyan-950",
		to: "to-cyan-500"
	}
	return (
		<CardTemplate
			title={title}
			description={description}
			technologies={technologies}
			images={images}
			color={color}
		/>
	);
}

function Claws() {
	const title = "NASA S.U.I.T.S - CLAWS UM 🚀 👨🏽‍🚀 🪐";
	const link = "https://claws.engin.umich.edu"
	const description =
		(
			<>
				This project is about creating an augmented reality (AR) experience for NASA astronauts. I led the web team to develop a website with real-time data visualization, navigation, messaging, and more. This experience taught me about CI/CD, Git, and AGILE within a collaborative cross-functional team. We worked with NASA engineers and presented our work at the Johnson Space Center in Houston, Texas!
			</>
		)
	const technologies = ["ReactJS", "ExpressJS", "Python Flask", "MongoDB", "WebSocket", "AWS", "HoloLens"];
	const images = [
		"/assets/gifs/ar_nav.gif",
		"https://www.youtube.com/watch?v=khfSNgq8GvQ",
		"/assets/projects/claws/me.jpg",
		"/assets/projects/claws/nav_create.jpg",
		"/assets/projects/claws/onsite.jpg",
		"/assets/projects/claws/astro.jpg",
		"/assets/projects/claws/mcc.jpg",
	];
	const color = {
		via: "via-cyan-950",
		to: "to-cyan-500"
	}
	return (
		<CardTemplate
			title={title}
			link={link}
			description={description}
			technologies={technologies}
			images={images}
			color={color}
		/>
	);
}

function Chess() {
	const title = "Chessir - AI Chess Trainer 🤖 🦾 ♟️";
	const link = "https://www.chessir.com";
	const description = (
		<>
			A web app that enhances chess skills by generating personalized puzzles based on players' Chess.com games. The application utilizes a custom algorithm interfacing with the AI engine Stockfish to identify missed winning moves and fluctuations in game data, producing tailored puzzles for users. By integrating with the Chess.com API, the site allows authenticated users to select and analyze their games, receiving puzzles stored in a database for targeted practice.<br />
			<br />
			I have partnered with chess academies to help improve students' strategic thinking and performance through personalized training. It was a tough project which taught me about RESTful APIs, OAuth, and data analysis and it was amazing seeing students improve using it!
		</>
	);
	const technologies = ["ReactJS", "Python Quart", "Redis", "Web Workers", "Celery", "MongoDB", "OAuth"];
	const images = [
		"/assets/projects/chess/landing_new.png",
		"/assets/projects/chess/stormers.jpg",
		"/assets/projects/chess/generate_puzzles.png",
		"/assets/projects/chess/analyze.png",
		"/assets/projects/chess/puzzles_found.png",
		"/assets/projects/chess/play.png",
	];
	const color = {
		via: "via-green-950",
		to: "to-green-500"
	}

	return (
		<CardTemplate
			title={title}
			link={link}
			description={description}
			technologies={technologies}
			images={images}
			color={color}
		/>
	);
}

export default Projects;
