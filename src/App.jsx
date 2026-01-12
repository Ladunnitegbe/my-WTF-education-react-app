// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './themes/global.css'
import { PageNavigation } from "./components/PageNavigation/PageNavigation.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { CardsSection } from './components/CardsSection/CardsSection.jsx';
import { AboutUs } from "./components/AboutUs/AboutUs.jsx";
import { AwardsSection } from "./components/AwardsSection/AwardsSection.jsx";
import { EventsSection } from "./components/EventsSection/EventsSection.jsx";


function App() {
  return (
    <>
      <PageNavigation />
      <Hero />
      <CardsSection />
      <AboutUs />
      <AwardsSection />
      <EventsSection />
    </>
  );
}

export default App;
