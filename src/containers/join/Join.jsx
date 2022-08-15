import React from 'react';
import "./Join.css";
import joinImg from "../../images/join-us-image.png";


const Join = () => {
  return ( 
    <div className="join">
      <div className="joinImage">
        <img src={joinImg} alt="" />
      </div>

      <div className="joinText">
        <h4>join us now</h4>
        <h3>join us and get up to 50% off</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error sint aut alias eligendi odit repudiandae laudantium voluptates quos officia quis?</p>
        <a href="#">Join Now</a>
      </div>
    </div>
   );
}
 
export default Join;