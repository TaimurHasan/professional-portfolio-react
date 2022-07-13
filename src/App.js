import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import About from "./components/About"
import fadeIn from 'react-animations/lib/fade-in';
import { StyleSheet } from 'aphrodite';

function App() {

  const [currentSection, setCurrentSection ] = useState();

  const styles = StyleSheet.create({
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '1s'
    }
  })

  let content;
  if (currentSection && currentSection.name === "Work") {
    content = <Projects styles={styles}/>
  } else if (currentSection && currentSection.name === "About") {
    content = <About setCurrentSection = {setCurrentSection} styles={styles}/>
  }

  

  return (
    <main>
      <NavBar 
        currentSection={currentSection}
        setCurrentSection = {setCurrentSection}
      />
      <Hero currentSection={currentSection} styles={styles}/>
      {currentSection ? (
        <div>
          {content}
        </div>
      ) : (
        <Intro setCurrentSection = {setCurrentSection} styles={styles}/>
      )}
      <Footer />
    </main>
  );
}

export default App;
