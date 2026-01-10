// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './themes/global.css'
import { PageNavigation } from "./components/PageNavigation/PageNavigation.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { CardsSection } from './components/CardsSection/CardsSection.jsx';
import { AboutUs } from "./components/AboutUs/AboutUs.jsx";

function App() {
  return (
    <>
      <PageNavigation />
      <Hero />
      <CardsSection />
      <AboutUs />
    </>
  );
}

export default App;
