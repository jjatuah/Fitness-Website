import React from 'react';
import "./Plan.css";



const Plan = ({plan, price, check, wrong, wrong2, good, good2}) => {
  return ( 
    <div className="plan">
      <h3>{plan}</h3>
      <div className="price">
        <span>$</span>{price}<span>/mo</span>
      </div>
      <a href="#">choose this plan</a>
      <div className="list">
        <p>{check}personal training</p>
        <p>{check}classes per week</p>
        <p>{check}access to the gym</p>
        <p>{wrong}{good}protein powder</p>
        <p>{wrong}{wrong2}{good2}membership</p>
      </div>
    </div>
   );
}
 
export default Plan;