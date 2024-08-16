'use client';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Projects() {
  return (
    <div className="container" id="projects">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <Claws />
      <Chess />
    </div>
  );
}

interface ProjectTemplateProps {
  title: string;
  description: React.ReactNode;
  technologies: string[];
  images: string[];
  color: {
    via: string;
    to: string;
  };
}

function ProjectTemplate({ title, description, technologies, images, color }: ProjectTemplateProps) {
  const technologiesString = technologies.join(' \u00A0 '); // \u00A0 is the Unicode for non-breaking space

  // Construct the gradient color style
  const gradientStyle = `bg-gradient-to-r from-zinc-900 from-30% ${color.via} via-60% ${color.to} to-90% flex flex-col md:flex-row w-full mb-5 gap-5 ring ring-zinc-800 rounded-2xl p-4 h-full overflow-hidden`;

  return (
    <div className={gradientStyle}>
      <div className="w-full md:w-1/2">
        <h3 className="text-black dark:text-white font-semibold text-xl pb-5">{title}</h3>
        <p className="text-gray-700 dark:text-gray-200 mb-4 text-base">{description}</p>
        <span className="text-gray-700 dark:text-gray-200 italic mr-2 last:mr-0 text-xs">
          {technologiesString}
        </span>
      </div>

      <div className="w-full max-w-lg md:w-1/2">
        <Carousel
          useKeyboardArrows={true}
          autoPlay={true}
          interval={1700}
          infiniteLoop={true}
          showThumbs={false}
          swipeable={true}
        >
          {images.map((URL, index) => (
            <Image
              alt="Project Image"
              src={URL}
              width={400}
              height={300}
              key={index}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

function Claws() {
  const title = "NASA S.U.I.T.S - CLAWS UM 🚀 👨🏽‍🚀 🪐";
  const description =
    (
      <>
        This project is about creating an augmented reality (AR) experience for NASA astronauts. I led the web team to develop a website with real-time data visualization, navigation, messaging, and more. This experience taught me about CI/CD, Git, and AGILE within a collaborative cross-functional team. We worked with NASA engineers and presented our work at the Johnson Space Center in Houston, Texas!
      </>
    )
  const technologies = ["ReactJS", "ExpressJS", "MongoDB", "WebSocket", "AWS", "HoloLens"];
  const images = [
    "/assets/projects/claws/me.jpg",
    "/assets/projects/claws/nav_create.jpg",
    "/assets/projects/claws/onsite.jpg",
    "/assets/projects/claws/astro.jpg",
    "/assets/projects/claws/mcc.jpg",
  ];
  const color = {
    via: "via-blue-950",
    to: "to-blue-500"
  }
  return (
    <ProjectTemplate
      title={title}
      description={description}
      technologies={technologies}
      images={images}
      color={color}
    />
  );
}

function Chess() {
  const title = "Chesslr - AI Chess Trainer 🤖 🦾 ♟️";
  const description = (
    <>
      A web app that enhances chess skills by generating personalized puzzles based on players' games from Chess.com. The application utilizes a custom algorithm interfacing with the AI engine Stockfish to identify missed winning moves and fluctuations in game data, producing tailored puzzles for users. By integrating with the Chess.com API, the site allows authenticated users to select and analyze their games, receiving puzzles stored in a database for targeted practice.<br />
      <br />
      I have partnered with chess academies to help improve students' strategic thinking and performance through personalized training. It was a tough project which taught me about RESTful APIs, OAuth, and data analysis and it was amazing seeing students improve using it!
    </>
  );
  const technologies = ["ReactJS", "Flask", "MongoDB", "OAuth"];
  const images = [
    "/assets/projects/chess/landing.png",
    "/assets/projects/chess/stormers.jpg",
    "/assets/projects/chess/generate.png",
    "/assets/projects/chess/analyze.png",
    "/assets/projects/chess/play.png",
  ];
  const color = {
    via: "via-green-950",
    to: "to-green-500"
  }

  return (
    <ProjectTemplate
      title={title}
      description={description}
      technologies={technologies}
      images={images}
      color={color}
    />
  );
}

export default Projects;
