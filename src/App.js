import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects"

function App() {

  const [currentSection, setCurrentSection ] = useState();

  return (
    <main>
      <NavBar 
        currentSection={currentSection}
        setCurrentSection = {setCurrentSection}
      />
      <Hero currentSection={currentSection}/>
      {currentSection ? (
        <Projects />
      ) : (
        <Intro />
      )}
    </main>
  );
}

export default App;
