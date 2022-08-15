import React from 'react';
import "./Achievement.css";


const Achievement = ({num, win}) => {
  return ( 
    <div className="achievement">
      <div className="box">
        <h3>{num}</h3>
        <p>{win}</p>
      </div>
    </div>
   );
}
 
export default Achievement;