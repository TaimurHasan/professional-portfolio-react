import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero";

function App() {
  const [sections] = useState([
    { name: 'About' },
    { name: 'Work' }
  ])

  const [currentSection, setCurrentSection ] = useState();

  return (
    <main>
      <NavBar 
        currentSection={currentSection}
        setCurrentSection = {setCurrentSection}
      />
      <Hero currentSection={currentSection}/>
    </main>
  );
}

export default App;
