import React, { useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactBar from './components/ContactBar';
import Technologies from './components/Technologies';
import Experience from './components/Experience';

function App() {
  const [nav, setNav] = useState(false);

  const home = useRef(null);
  const technologies = useRef(null);
  const experience = useRef(null);

  const arrayRef = [home, technologies, experience];

  const scrollToSection = (elementRef: any, mobile: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    });
    const verificator = mobile;
    verificator && setNav(!nav);
  }

  return (

    <>
      <Navbar nav={nav} setNav={setNav} scrollToSection={scrollToSection} arrayRef={arrayRef} />
      <Home scrollToSection={scrollToSection} experience={experience} home={home} />
      <Technologies technologies={technologies} />
      <Experience experience={experience} />
      <ContactBar />
    </>
  );
}

export default App;
