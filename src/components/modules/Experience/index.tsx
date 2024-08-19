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
    const title = "New York Life Insurance Company - Buisness Engineering Intern 🗽 🍎 💻";
    const description = (
        <>
            This internship allowed me to get both technical and buisness experience on a software product built on technologies like ReactJS and Java Springboot.
            I worked on a team which developed NYL's internal consulting software, GuideMe, which is used by over 13,000 agents and managers to help in the sales process.
            Over the course of the program, I developed an accessbility feature which vastly improved visuals for those with colorblindess and other visual impairments, improved screen-reader support, and implemented video summarizing solutions.
            I also got experience with automating testing by using Selenium which vastly helped in the process. This experience was a great blend of technical and buisness skills and I learned a lot about how large softwares are developed and maintained. This was also my first time in NYC and I really fell in love with the city!

        </>
    );
    const technologies = ["ReactJS", "Java Springboot"];
    const images = [
        "/assets/Experiences/NYL/nyl_logo.jpg",
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
            In this internship I got a chance to work on a couple different projects. The first one was a a multi-threaded desktop application written in C++ and Qt which streamlined financial data parsing, making the process much faster and more efficient. I also got to work on a JavaScript app that seamlessly worked with a vast collection of electric pole diagrams and spreadsheets, dramatically speeding up data conversion. Lastly, I designed a central dashboard using PowerBI and Python that brought all key metrics and KPIs together in one place, enhancing team communication and collaboration. This role was a fantastic blend of problem-solving and innovation, allowing me to dive into diverse technologies and make a real impact on how data is managed and visualized.
        </>
    );
    const technologies = ["C++", "Python", "Javscript", "Qt"];
    const images = [
        "/assets/Experiences/HBK/hbk_logo4.png",
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

export default Experience;