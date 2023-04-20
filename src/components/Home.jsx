import React from "react";
import Navbar from "./Navbar";
import MainHeading from "./MainHeading";
import Navbar2 from "./Navbar2";
import Avatar from "./Avatar";



import Footer from "./Footer";
// import "../styles.css";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu5 from "./Menu5";






function Home(){
    return(
    <div>
        <Navbar />
{/*         
        <Streak /> */}
          <MainHeading />
  
          <Navbar2 />
  
 
   <div class="second">
  <br></br>
  <br></br>
  <br></br>
  <table>
  
    <tr>
      <td style={{padding:"0px 0px 0px 190px"}}>
      <Avatar img="images/girl1.png" /> 
      </td>
      <td style={{padding:"0px 0px 0px 220px"}}>
      <Avatar img="images/girl2.png" /> 
      </td>
      <td style={{padding:"0px 0px 0px 130px"}}>
      <Avatar img="images/girl3.png" /> 
      </td>
    </tr>
  
    <tr>
      <td style={{padding:"0px 0px 0px 50px"}}>
       <p className="c1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> &nbsp; &nbsp; sed do eiusmod tempor incididunt ut labore ad mi<br></br> &nbsp; &nbsp; &nbsp;et dolore magna  ad minim aliqua. ad miUt enim</p>
      </td>
      <td style={{padding:"0px 50px 0px 70px"}}>
        <p className="c1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> &nbsp; &nbsp; sed do eiusmod tempor incididunt ut labore ad mi<br></br> &nbsp; &nbsp; &nbsp;et dolore magna  ad minim aliqua. ad miUt enim</p>
      </td>
      <td>
        <p className="c1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> &nbsp; &nbsp; sed do eiusmod tempor incididunt ut labore ad mi<br></br> &nbsp; &nbsp; &nbsp;et dolore magna  ad minim aliqua. ad miUt enim</p>
      </td>
    </tr>
  </table>
  
  <table>
    <tr>
      <td style={{width:"400px"}}>

       <tr>
       <div class="abc">
        <div class="row">
        <div class="column">
        <div className="practice">
        <div><h2 style={{fontSize:"30px", fontWeight:"bolder"}}>COMPANY DETAIL</h2></div>
            <a href="Meditation"><img src="images/meditation.png" alt="meditation" width={300} height={300}/></a>
           
            
            </div>
        
          </div>
        </div>
       </div>


       </tr>

          <tr>
        <div class="abc">
      <div class="row">
          <div class="column">
          
           
            <div className="practice" style={{fontSize:"200px"}}><h2 style={{fontSize:"30px", fontWeight:"bolder"}}>TRACK HERE</h2></div>
            <div className="practice">
              <a href="Level1">
                <img src="images/level1.jpg" alt="level1" width={230} height={100}/></a></div>
          
            <br></br>
           
            <div className="practice">
            <a href="Level2"><img src="images/level2.jpg" alt="level2" width={230} height={100}/></a>
            </div>
            <br></br>
           
            <div className="practice"><img src="images/level3.jpg" alt="level3" width={230} height={100}/></div>
            <br></br>
            
            <div className="practice"><img src="images/level4.jpg" alt="level4" width={230} height={100}/></div>
            <br></br>
           
            <div className="practice"><img src="images/level5.jpg" alt="level5" width={230} height={100}/></div>
          
          </div>
          </div>
          </div>
          </tr>
      </td>
  
      <td style={{width:"1500px"}}>
      <div class="abc">
      <div class="row">
          <div class="column">
  
          
            <div className="disease"><h1 style={{fontSize:"50px", fontWeight:"bolder"}}>SET UP NEW COMPANY ALERT</h1></div>
            
            <table>
              <tr >
                <td style={{padding: "0px 50px 0px 40px"}} >
                <div className="practice"><img src="images/exercise1.png" alt="level1" width={170} height={200}/></div>
                </td>
                <td style={{padding: "0px 50px 0px 0px"}}>
                  <tr style={{fontSize:"30px", fontWeight:"bolder"}}>Company Type</tr>
                  <tr style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </tr>
                  
                  <button type="button" class="btn btn-outline-dark">
                  <Menu />
                    </button>
               
                 
                  
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td style={{padding: "0px 50px 0px 40px"}}>
                <div className="practice"><img src="images/exercise2.png" alt="level1" width={170} height={150}/></div>
                </td>
                <td style={{padding: "0px 50px 0px 0px"}}>
                  <tr style={{fontSize:"30px", fontWeight:"bolder"}}>Activity</tr>
                  <tr style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </tr>
                  <button type="button" class="btn btn-outline-dark">
                  <Menu3 />
                  </button>
                 
                </td>
              </tr>
            </table>
            <br></br>
            <br></br>
            <table>
              <tr>
                <td style={{padding: "0px 50px 0px 40px"}}>
                <div className="practice"><img src="images/exercise3.png" alt="level1" width={170} height={150}/></div>
                </td>
                <td style={{padding: "0px 50px 0px 0px"}}>
                  <tr style={{fontSize:"30px", fontWeight:"bolder"}}>Geographic Location</tr>
                  <tr style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </tr>
                  <button type="button" class="btn btn-outline-dark">
                  <Menu2 />
                  </button>
                </td>
              </tr>
            </table>
            <br></br>
            <br></br>
            <table>
              <tr>
                <td style={{padding: "0px 50px 0px 40px"}}>
                <div className="practice"><img src="images/exercise4.png" alt="level1" width={170} height={150}/></div>
                </td>
                <td style={{padding: "0px 50px 0px 0px"}}>
                  <tr style={{fontSize:"30px", fontWeight:"bolder"}}>Paid Up Capital</tr>
                  <tr style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </tr>
                  <button type="button" class="btn btn-outline-dark">
                  <Menu4 />
                  </button>
                </td>
              </tr>
            </table>
            <br></br>
            <br></br>
            <table>
              <tr>
                <td style={{padding: "0px 50px 0px 40px"}}>
                <div className="practice"><img src="images/exercise5.png" alt="level1" width={170} height={150}/></div>
                </td>
                <td style={{padding: "0px 50px 0px 0px"}}>
                  <tr style={{fontSize:"30px", fontWeight:"bolder"}}>Other</tr>
                  <tr style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </tr>
                  <button type="button" class="btn btn-outline-dark">
                  <Menu5 />
                  </button>
</td>
              </tr>
            </table>
            <br></br>
            
          </div>
          </div>
          </div>
      </td>
  
    </tr>
  </table>
  
     
        </div> 
   
        <Footer />
    
    
      </div>);
  }
  export default Home;