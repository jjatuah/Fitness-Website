import React from 'react';
import "./Banner.css";
import bannerImg from "../../images/home-img.png";


const Banner = () => {
  return ( 
    <div className="banner">
      <div className="bannerContainer">
        <div className="bannerImage">
          <img src={bannerImg} alt="" />
        </div>

        <div className="bannerText">
          <span>Back to the gym</span>
          <h3>start your fitness journey with us today</h3>
          <a href="#">get started</a>
        </div>
      </div>
    </div>
   );
}
 
export default Banner;