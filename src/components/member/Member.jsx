import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import React,{useState} from 'react';
import "./Member.css";


const Member = ({img, role, name, fb, tw, ins, lkdn}) => {

  const [memberTag, setMemberTag] = useState(true);
  const [socials, setSocials] = useState(false);

  const mouseEnter = () => {
    setMemberTag(false);
    setSocials(true);
  }
  
  const mouseLeave = () => {
    setMemberTag(true);
    setSocials(false);
  }

  return ( 
    <div className="member" onMouseEnter={mouseEnter}
     onMouseLeave={mouseLeave}>
      <img src={img} alt="" />
      {memberTag && (<div className="details">
        <span>{role}</span>
        <h3>{name}</h3>
      </div>)}
      {socials && <div className="socials">
        <a href={fb}>{<Facebook/>}</a>
        <a href={tw}>{<Twitter/>}</a>
        <a href={ins}>{<Instagram/>}</a>
        <a href={lkdn}>{<LinkedIn/>}</a>
      </div>}
    </div>
   );
}
 
export default Member;