// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './themes/global.css'
import { PageNavigation } from "./components/PageNavigation/PageNavigation.jsx";
import { Hero } from "./components/Hero/Hero.jsx";

function App() {
  return (
    <>
      <PageNavigation />
      <Hero />
    </>
  );
}

export default App;
