import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {

  const [currentSection, setCurrentSection ] = useState();

  let content;
  if (currentSection && currentSection.name === "Work") {
    content = <Projects />
  } else if (currentSection && currentSection.name === "About") {
    content = <About />
  }

  return (
    <main>
      <NavBar 
        currentSection={currentSection}
        setCurrentSection = {setCurrentSection}
      />
      <Hero currentSection={currentSection}/>
      {currentSection ? (
        <div>
          {content}
        </div>
      ) : (
        <Intro />
      )}
      <Footer />
    </main>
  );
}

export default App;
