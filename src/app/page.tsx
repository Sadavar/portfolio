import AllProviders from 'components/AllProviders';

import Intro from 'components/modules/Intro';

import Projects from 'components/modules/Projects';
import About from 'components/modules/About';
import Contact from 'components/modules/Contact';
import Experience from 'components/modules/Experience';

import Footer from 'components/ui/theme/Footer';
import RecentProjects from 'components/modules/RecentProjects';

const HomePage = () => (
	<>

		<AllProviders>
			<Intro />
			<RecentProjects />
			<Experience />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</AllProviders>
	</>
);

export default HomePage;
