import Link from 'next/link';
import Image from 'next/image';

const Skills = () => (
  <div className="bg-[url('/assets/illustrations/details.svg')] bg-contain bg-no-repeat bg-left-top" id="about">
    <div className="container py-16 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex-none lg:flex-1">
        <Image
          src="/assets/illustrations/skills.svg"
          alt="I’m John and I’m a Backend & Devops engineer!"
          width={400}
          height={300}
          className="absolute z-10" // Adjust z-index to place this image below the overlay
        />
        <Image
          src="/assets/illustrations/headshot.jpg"
          alt="Overlay image"
          width={400}
          height={300}
          className="relative z-20" // Ensure this image is on top
        />
      </div>
      <div className="flex-none lg:flex-1 pl-0 lg:pl-8">
        <h2 className="mb-8 text-3xl font-bold text-brand-primary dark:text-white typography">More about me</h2>
        <p className="mb-[2.5rem] font-normal text-xl md:text-[26px] text-brand-secondary dark:text-slate-200 leading-[34px] typography">
          I was born in Kansas City, MI but grew up in Chicago, IL. Outside of programming, I tutor kids in chess, learn about philosophy, and play spikeball on the beach!
        </p>
      </div>
    </div>
  </div>
);

export default Skills;
