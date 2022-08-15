import { Close, Menu } from '@material-ui/icons';
import React, { useState } from 'react';
import "./Navbar.css";


const Navbar = () => {

  const [menuStatus, setMenuStatus] = useState(false);
  const [navbar, setNavBar] = useState(false);


  const changeBackground = () => {
    if(window.scrollY >= 100) {
      setNavBar(true)
    } else {
      setNavBar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return ( 
    <div className={ navbar ? "navbar active" : "navbar"}>
      <a href="#" className='logo'><span className='alt'>Jat</span> Fitness</a>

      <ul className="navLinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#course">Courses</a></li>
        <li><a href="#plan">Pricing</a></li>
        <li><a href="#team">Our Team</a></li>
        <li><a href="#blog">Blogs</a></li>
        <li><a href="#footer">Contact us</a></li>
      </ul>

      <div className="menu">
        {menuStatus ? 
          <div className="closeBtn">
            <Close 
            style={{color:"#fff", fontSize: "30px", cursor:"pointer",
            textAlign:"end"}} 
            onClick= {() => setMenuStatus(false)} 
            />
          </div>
        :
          <div className="menuBtn">
            <Menu style={{color:"#fff", fontSize: "30px", cursor:"pointer"}} onClick= {() => setMenuStatus(true)}           
            />
          </div>
        }

        {
          menuStatus && (
            <ul className="mobileNavLinks"  >
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#course">Courses</a></li>
              <li><a href="#plan">Pricing</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#blog">Blogs</a></li>
              <li><a href="#footer">Contact us</a></li>
            </ul>
          )
        }
      </div>

    </div>
   );
}
 
export default Navbar;