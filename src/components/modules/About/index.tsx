import Link from 'next/link';

const About = () => (
  <div className="flex justify-center w-full" id="about">
    <div className="container py-16 flex flex-col lg:flex-row justify-between items-center">
      <div className="pb-10 lg:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <img
            src="/assets/illustrations/headshot.webp"
            alt="headshot image"
            className="object-cover w-full h-full"
            style={{
              objectPosition: 'center', // Adjust as needed
              transform: 'scale(1.1) translateX(10px) translateY(10px)' // Zoom in by 20% and move right
            }}
          />
        </div>
      </div>
      <div className="text-center lg:text-left lg:w-1/2">
        <h2 className="mb-8 text-3xl font-bold text-brand-primary dark:text-white typography">
          More about me
        </h2>

        <p className="text-gray-700 dark:text-gray-200 mb-4 text-lg">
          I grew up in Chicago, went to high school at Walter Payton and now study at the University of Michigan. I first got into programming when I tried to develop cheats for a game called Minecraft when I was younger and I have carried that love for tinkering with me. Outside of programming, I like to tutor kids in chess, learn about philosophy and religion, and play Spikeball on the beach!
        </p>
      </div>
    </div>
  </div>
);

export default About;
