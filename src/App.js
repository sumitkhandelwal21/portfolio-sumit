import React, { useState } from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  console.log("hello-->",isDarkMode);
  
  return (
  <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <CssBaseline />
    <div >
      <NavBar setIsDarkMode={setIsDarkMode}/>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <SocialLinks />
    </div>
  </ThemeProvider>
  );
}

export default App;
