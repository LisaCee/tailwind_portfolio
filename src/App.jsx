import Nav from './components/Nav';
import Intro from './components/Intro';
import SkillsBar from './components/skillsBar';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './index.css';

function App() {
	return (
		<div className="App">
			<Nav />
			<Intro />
			<SkillsBar />
			<About />
			{/* <Skills /> */}
			{/* <Footer /> */}
		</div>
	);
}

export default App;
