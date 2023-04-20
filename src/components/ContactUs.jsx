import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactUs(){
    return(
<div className="contact">
        <Navbar />
        <div className= "contactbox" style={{padding: "120px 450px 0px 400px"}}>
        <div class="abc">
        <div class="row">
        <div class="column">
<h1 className="Heading">Contact Us!</h1>
<p className="Heading1">Zauba Corp is India's largest business research platform and contains information about all companies incorporated in India.
Zauba Corp does not own or has no relationship with any of the companies mentioned on our website.</p>

<p className="Heading2">For support or any queries- <br></br>
<br></br>



<div><img className="map" src="images/email.png" alt="email" height={60} width={60}/>
<p>EMAIL: <br></br><a href="mailto:info@zaubacorp.com">info@zaubacorp.com </a></p>
</div>
<br></br>
<div><img className="map" src="images/map.png" alt="map" height={50} width={50}/>
<p>ADDRESS: <br></br>Zauba Technologies Private Limited
No 43,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Residency Road
Bangalore - 560 025</p>
</div>
<br></br>

<div>
    <img className="map" src="images/telephone.png" alt="tel" height={60} width={60}/>
<p>PHONE: <br></br>+919765435678</p>
</div>

</p>

            
            </div>
            </div>
            </div>
            </div> 
            



        <Footer />    
</div>            
    );
}

export default ContactUs;