import Intro from 'components/modules/Intro';
import Projects from 'components/modules/Projects';
import About from 'components/modules/About';
import Contact from 'components/modules/Contact';
import AllProviders from 'components/AllProviders';
import Footer from 'components/ui/theme/Footer';
import Experience from 'components/modules/Experience';
import Head from 'next/head';

const HomePage = () => (
  <>

    <AllProviders>
      <div className="bg-black">
        <Head>
          <title>Home - Varun Sadasivam</title>
          <meta name="description" content="Hi I am Varun Sadasivam, a Computer Science student at the University of Michigan. This is my personal website where you can learn more about me and my projects!" />
          <meta property="og:title" content="Home - Varun Sadasivam" />
          <meta property="og:description" content="Hi I am Varun Sadasivam, a Computer Science student at the University of Michigan. This is my personal website where you can learn more about me and my projects!" />
          <meta property="og:image" content="/assets/thumbnail/thumbnail.png" />
          <meta property="og:url" content="https://varunsadasivam.com" />
          <meta name="robots" content="index, follow" />
        </Head>
        <Intro />
        <Experience />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </AllProviders>
  </>
);

export default HomePage;
