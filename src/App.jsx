// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

// import './themes/global.css'
import { Button } from './components/button/Button.jsx'
import Facebook from './components/PageNavigation/PageNavigation_images/Facebook.svg?react';
 
 
function App() {
  function check(){
    console.log("Have been clicked");
  }
 
  function loader(){
  }
 
return (
    <>
    <Button children="Save" variant="primary"/>
      <Button children="Block" variant="secondary" size="sm"/>
      <Button loading={false} onClick={check} >
        Save
       <Facebook />
      </Button>
     
    </>
   
  )
}
 
export default App