import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import  Home from "./components/Home";



import Meditation from "./components/Meditation";

import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";





function App(){
 

  return(

   
    <BrowserRouter>
 
  
    <Routes>
      <Route path="/" element={<Home />} />
      

      
      <Route path="Meditation" element={<Meditation />} />

      <Route path="ContactUs" element={<ContactUs />} />

      <Route path="AboutUs" element={<AboutUs />} />

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;