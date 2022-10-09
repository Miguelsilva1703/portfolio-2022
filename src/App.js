import { React, useState } from "react";
import './app.css';
import GlobalStyle from "./components/Styles/GlobalStyles";
import Navigation from "./components/Nav/Nav";
import SideNav from "./components/Nav/SideNav";
import HeroBoot from "./components/HeroSectionBoot/HeroBoot";
import ProjectsBoot from "./components/ProjectsBoot/ProjectsBoot"
import TechStack from "./components/TechStack/TechStack"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <SideNav isOpen={isOpen} toggle={toggle} />
      <Navigation toggle={toggle} />
      <HeroBoot />
      <ProjectsBoot />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
