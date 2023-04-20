import React from "react";
import "./Footer.css"

function Footer(){
    return(
        <div>
        
		
		<footer class="footer-distributed">
        
			<div class="footer-left" style={{padding: "0px 500px 0px 0px"}}>
          
				<h1><span>environmentally </span>safe</h1>
				
				<p className="Healer">dismantling of electronic waste.</p>

				<p class="footer-links">
					<a href="/home">Home</a>
					|
					<a href="/about">About Us</a>
					|
					<a href="/contact">Contact</a>
				</p>

               
                <p class="footer-company-name">© 2013 Zauba Technologies & Data Services Private Limited.</p>
			</div>







			<div class="footer-center">
			<p styles={{color:"white"}} >Details</p><br></br>
			<p className="Heading2">For support or any queries- </p>		
				<div class="footer-icons">
				{/* <p className="Heading2">For support or any queries- </p> */}
<br></br>
				<div>
				<div><img className="map" src="images/mail2.png" alt="email" height={50} width={50}/>
<p>EMAIL: <br></br><a href="mailto:contact@zaubacorp.com">contact@zaubacorp.com </a></p>
</div>
<br></br>
<div><img className="map" src="images/add2.png" alt="map" height={40} width={40}/>
<p>ADDRESS: <br></br>Zauba Technologies Private Limited
No 43,</p><p>Residency Road
Bangalore - 560 025</p>
</div>
<br></br>

<div>
    <img className="map" src="images/tele2.png" alt="tel" height={50} width={50}/>
<p>PHONE: <br></br>+9197654356778</p>
</div>
				</div>

			
			



</div>

</div>


			<div class="footer-right">
				
				<div class="footer-icons">
				



/


					
				</div>
			</div>


			


           
		</footer>  
        <footer style={{textAlign:"center", padding:"0px 0px 0px 0px", fontSize:"20px"}}>

            <p > <b>All rights reserved. </b> </p>
            
          </footer>
          </div>
    );
}

export default Footer;