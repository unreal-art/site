import { NavbarDemo } from './components/Navbar';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Mission from './components/Mission';
import About from './components/About';
import FeaturesSection from './components/FeaturesSection';
import {UnrealFooter} from './components/UnrealFooter';
import './App.css';

function App() {
  const handleScroll = () => {
    const section = document.getElementById('section-intro');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main">
      <div className="fixed-background dark">
        <div className="texture"></div>
      </div>
      <NavbarDemo />
      <div className="main-wrap">
        <Header onScroll={handleScroll} />
        <IntroSection />
        <Mission />
        <About />
        <FeaturesSection />
        <UnrealFooter />
      </div>
    </div>
  );
}

export default App;
