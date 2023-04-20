import React from "react";
import Marquee from "react-fast-marquee";
import "./MainHeading.css";
function MainHeading(){
    return(


        <div>




       <div className="container1" style={{display: "grid", gridTemplateColumns: "auto auto auto", gap: "10px",  backgroundColor: "#B5DFD1", padding: "0px 0px 500px 0px", height: "400px"}}>

    <div style={{flexDirection: "column", gridColumnStart:"1", gridColumnEnd:"2"}}>
        <img class="mainImage" src="images/image.jpg" alt="image1" height="500"/> 
    </div>


        <div>
             <h1 className="mainHeading" style={{fontFamily:"poppins", fontWeighht:"bolder", color: "3d4945", alignContent: "right", display:"flex", direction:"row", fontSize:"50px", padding:"100px 100px 0px 20px"}}> REMINE INDIA PRIVATE LIMITED</h1> 
        
             <p className="mainHeading" style={{fontFamily:"poppins", color: "#10603A", alignContent: "top", display:"flex", direction:"row", fontSize:"40px", padding:"0px 5px 5px 20px"}}> Reduce&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reuse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recycle</p>
             <p className="mainHeading" style={{fontFamily:"poppins", color: "#10603A", alignContent: "top", display:"flex", direction:"row", fontSize:"29px", padding:"0px 5px 5px 20px"}}> We Recycle and manage all the E-Waste Responsibly.</p> 
              
        </div>

     
       </div>
    

        <div>
       <Marquee speed={100} style={{backgroundColor:"white", fontSize:"20px", fontWeight:"bold", width:"100%", fontFamily:"poppins light"}}>
        Remine India Private Limited is a Private incorporated on 06 December 2022 ● It is classified as Non-govt company and is registered at Registrar of Companies, Uttarakhand ● Its authorized share capital is Rs. 1,000,000 and its paid up capital is Rs. 1,000,000 ● It is inolved in Recycling of metal waste and scrap ● 
    </Marquee>
    </div>
     


    
    </div>

    
    );
       
}

export default MainHeading;