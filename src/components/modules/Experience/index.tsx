'use client';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardTemplate from "../CardTemplate";


function Experience() {
	return (
		<div className="container" id="projects">
			<h2 className="text-2xl font-bold mb-6">Experience</h2>
			<NYL />
			<HBK />
		</div>
	);
}


function NYL() {
	const title = "New York Life Insurance - Software Engineering Intern 🗽 🍎 💻";
	const description = (
		<>
			This internship allowed me to get both technical and business experience on a software product built on technologies like ReactJS and Java Spring Boot.
			I worked on a team which developed NYL's internal consulting software, GuideMe, which is used by over 13,000 agents and managers to help in the sales process.
			<br></br><br></br>
			Over the course of the program, I developed an accessibility feature which vastly improved visuals for those with colorblindness and other visual impairments, improved screen-reader support, and implemented video summarizing solutions.
			I also got experience with automated testing by using Selenium which vastly helped in the process. This experience was a great blend of technical and business skills and I learned a lot about how large softwares are developed and maintained. This was also my first time in NYC, and I really fell in love with the city!

		</>
	);
	const technologies = ["ReactJS", "Java Spring Boot"];
	const images = [
		"/assets/Experiences/NYL/nyl_logo.jpg",
		"/assets/Experiences/NYL/nyl_building.avif",
	];
	const color = {
		via: "via-blue-950",
		to: "to-blue-500"
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
function HBK() {
	const title = "HBK Engineering - Software Engineering Intern 🧑🏽‍💻 🛠️ 🚧";
	const description = (
		<>
			In this internship I got a chance to work on a couple of different projects.
			The first one was a multi-threaded desktop application written in C++ and Qt which streamlined financial data parsing, making the process much faster and more efficient.
			I also got to work on a JavaScript app that seamlessly worked with a vast collection of electric pole diagrams and spreadsheets, dramatically speeding up data conversion.
			Lastly, I designed a central dashboard using PowerBI and Python that brought all key metrics and KPIs together in one place, enhancing team communication and collaboration.
			<br></br><br></br>
			This role was a great blend of problem-solving and innovation, allowing me to dive into diverse technologies and make a real impact on how data is managed and visualized.

		</>
	);
	const technologies = ["C++", "Python", "JavaScript", "Qt"];
	const images = [
		"/assets/Experiences/HBK/hbk_logo.png",
	];
	const color = {
		via: "via-teal-950",
		to: "to-teal-500"
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

export default Experience;