import Link from 'next/link';
import Image from 'next/image';
import Header from 'components/ui/theme/Header';

const Intro = () => (
  <div className="h-8/12">
    <Header />
    <div className="container py-16 flex items-center flex-col md:flex-row justify-between h-3/4">
      <div className="items-center flex flex-col flex-1 w-full pl-5 md:pl-0 md:w-1/2 mb-8 md:mb-0">
        <h1 className="pb-5 md:pb-2 text-5xl md:text-6xl font-bold text-left w-full md:w-3/4 ">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent uppercase">Varun Sadasivam</span>
        </h1>
        <h1 className="pb-10 text-5xl md:text-6xl font-bold text-left w-full md:w-3/4">COMPUTER SCIENCE @ UNIVERSITY OF MICHIGAN</h1>
        <h2 className="pb-5 w-full md:w-3/4 text-xl md:text-xl text-white text-left">
          Dive into my world of programming, chess, and outer space as I continue to explore the tech world!
        </h2>
        <Link href="#contact" className="text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-padding rounded-2xl pl-10 pr-10 pt-4 pb-4 ">
          Contact Me
        </Link>
      </div>
    </div>
  </div >
);

export default Intro;
