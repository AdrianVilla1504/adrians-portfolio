import React, {
  HTMLAttributeAnchorTarget,
  MutableRefObject,
  RefObject,
  useRef,
  useState,
} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactBar from "./components/ContactBar";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [nav, setNav] = useState<boolean>(false);

  const home = useRef<null | HTMLParagraphElement>(null);
  const technologies = useRef<null | HTMLParagraphElement>(null);
  const experience = useRef<null | HTMLParagraphElement>(null);
  const contact = useRef<null | HTMLParagraphElement>(null);

  const arrayRef = [home, technologies, experience, contact];

  const scrollToSection = (elementRef: any, mobile: boolean) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
    const verificator = mobile;
    verificator && setNav(!nav);
  };

  return (
    <>
      <Navbar
        nav={nav}
        setNav={setNav}
        scrollToSection={scrollToSection}
        arrayRef={arrayRef}
      />
      <Home
        scrollToSection={scrollToSection}
        experience={experience}
        home={home}
      />
      <Technologies technologies={technologies} />
      <Experience experience={experience} />
      <Contact contact={contact} />
      <ContactBar />
    </>
  );
}

export default App;
