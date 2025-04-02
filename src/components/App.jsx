import { useState, useEffect } from "react";
import Aos from "aos";
import Header from "./Header.jsx"
import BackgroundAnimation from "./BackgroundAnimation.jsx";
import Presentation from "./Presentation.jsx";
import Projects from "./Projects";
import Top from "./Top";
import Skills from "./Skills.jsx";
import "../Assets/CSS/App.scss";

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <BackgroundAnimation />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Top />
      <Presentation />
      <Skills />
      <Projects />
    </div>
  );
}
