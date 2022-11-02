import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import About from "./components/About"
import Button from "./components/Button";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <main>
      <NavBar showAbout={showAbout}/>
      <Hero/>
      <Intro />
      <Button  showAbout={showAbout} setShowAbout={setShowAbout}/>
      {showAbout && <About />}
      <Projects />
      {/* {currentSection ? (
        <div>
          {content}
        </div>
      ) : (
        <Intro setCurrentSection = {setCurrentSection} />
      )} */}
      <Footer />
    </main>
  );
}

export default App;
