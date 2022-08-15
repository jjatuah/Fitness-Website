import { ArrowRight,  Email, Facebook, Instagram, LinkedIn, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import "./Footer.css";



const Footer = () => {

  const styler = () => {

  }
  return ( 
    <div className="footer" id='footer'>
      <div className="footerContainer">
        <div className="footerBox">
          <h3>quick links</h3>
          <a href="#">{<ArrowRight style={{color: "#ff5421"}}/>}home</a>
          <a href="#">{<ArrowRight style={{color: "#ff5421"}}/>}about</a>
          <a href="#"><ArrowRight style={{color: "#ff5421"}}/>courses</a>
          <a href="#"><ArrowRight style={{color: "#ff5421"}}/>pricing</a>
          <a href="#"><ArrowRight style={{color: "#ff5421"}}/>team</a>
          <a href="#"><ArrowRight style={{color: "#ff5421"}}/>blogs</a>
        </div>

        <div className="footerBox">
          <h3>follow us</h3>
          <a href="#">{<Facebook style={{color: "#ff5421", marginRight: "3.5px"}}/>}Facebook</a>
          <a href="#">{<Twitter style={{color: "#ff5421", marginRight: "3.5px"}}/>} Twitter</a>
          <a href="#">{<Instagram style={{color: "#ff5421", marginRight: "3.5px"}}/>} Instagram</a>
          <a href="#"><LinkedIn style={{color: "#ff5421", marginRight: "3.5px"}}/>  Linkedin</a>
        </div>

        <div className="footerBox">
          <h3>contact info</h3>
          <a href="#"><Phone style={{color: "#ff5421", marginRight: "3.5px"}}/>+234 855 7454 8589</a>
          <a href="#"><Email style={{color: "#ff5421", marginRight: "3.5px"}}/>kk@gitmail.com</a>
          <a href="#"><Room style={{color: "#ff5421", marginRight: "3.5px"}}/>Sabon Tasha Kaduna</a>
        </div>

        <div className="footerBox">
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input type="email" name='email' placeholder='Enter Your Email Address' id='' className='email'/>
            <input type="submit" className='footerBtn'  value="subscribe"/>
          </form>
        </div>
      </div>
    </div>
   );
}
 
export default Footer;