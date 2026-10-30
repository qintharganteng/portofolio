import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Research from './sections/Research';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import Community from './sections/Community';
import Contact from './sections/Contact';
import './styles/tokens.css';
import './styles/global.css';

export default function App() {
  return <>
    <a className="skip-link" href="#work">Skip to projects</a>
   
    <main>
      <Hero />
      <Projects />
          <Experience />
      <Skills />
      <Research />
      <Achievements />
      <Education />
      <Community />
    
    </main>
    <Footer />
  </>;
}
