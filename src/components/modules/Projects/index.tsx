'use client';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import CardTemplate from "../CardTemplate";

function Projects() {
  return (
    <div className="container" id="projects">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <Claws />
      <Chess />
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
    <CardTemplate
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
    <CardTemplate
      title={title}
      description={description}
      technologies={technologies}
      images={images}
      color={color}
    />
  );
}

export default Projects;
