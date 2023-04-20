import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import  Home from "./components/Home";


import Heart1 from "./components/Heart1";



import Heart2 from "./components/Heart2";
import Heart3 from "./components/Heart3";
import Meditation from "./components/Meditation";

import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";





function App(){
 

  return(

   
    <BrowserRouter>
 
  
    <Routes>
      <Route path="/" element={<Home />} />
      

      <Route path="Heart1" element={<Heart1 />} />

     
      
      <Route path="Heart2" element={<Heart2 />} />
      <Route path="Heart3" element={<Heart3 />} />
      <Route path="Meditation" element={<Meditation />} />

      <Route path="ContactUs" element={<ContactUs />} />

      <Route path="AboutUs" element={<AboutUs />} />

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;