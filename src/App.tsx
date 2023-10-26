import React, { useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactBar from "./components/ContactBar";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import { act } from "react-dom/test-utils";

function App() {
  const home = useRef<null | HTMLDivElement>(null);
  const about = useRef<null | HTMLDivElement>(null);
  const technologies = useRef<null | HTMLDivElement>(null);
  const experience = useRef<null | HTMLDivElement>(null);
  const contact = useRef<null | HTMLDivElement>(null);

  const arrayRef = [home, technologies, experience, about, contact];
 
  const [nav, setNav] = useState<boolean>(false);
  const [nowRef, setNowRef] = useState<any>(home);

  const scrollToSection = (
    elementRef: React.RefObject<HTMLDivElement>,
    mobile: boolean
  ): void => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: "smooth",
    });
    mobile && setNav(!nav);
    setNowRef(elementRef);
  };

  return (
    <>
      <Navbar
        nav={nav}
        setNav={setNav}
        scrollToSection={scrollToSection}
        arrayRef={arrayRef}
        nowRef={nowRef}
      />
      <Home
        scrollToSection={scrollToSection}
        experience={experience}
        nav={nav}
        home={home}
      />
      <Technologies technologies={technologies} />
      <Experience experience={experience} />
      <AboutMe about={about} />
      <Contact contact={contact} />
      <ContactBar />
    </>
  );
}

export default App;
