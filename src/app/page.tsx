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
      <Intro />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </AllProviders>
  </>
);

export default HomePage;
