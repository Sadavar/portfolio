import Intro from 'components/modules/Intro';
import Projects from 'components/modules/Projects';
import About from 'components/modules/About';
import Contact from 'components/modules/Contact';
import AllProviders from 'components/AllProviders';
import Footer from 'components/ui/theme/Footer';
import Experience from 'components/modules/Experience';

const HomePage = () => (
  <>

    <AllProviders>
      <div className="bg-black">
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
