import { CalendarTodayOutlined, Timer } from '@material-ui/icons';
import React from 'react';
import "./Course.css";


const Course = ({img, days, duration, course}) => {
  return ( 
    <div className="course">
      <div className="courseImage">
        <img src={img} alt="course image" />
      </div>

      <div className="content">
        <div className="icons">
          <span>{<CalendarTodayOutlined style={{color: "#ff5421", paddingRight: "3.5px"}}/>}{days}</span>
          <span>{<Timer style={{color: "#ff5421", paddingRight: "3.5px"}}/>}{duration}</span>
        </div>

        <h3>{course}</h3>
        <a href="#">Read</a>
      </div>
    </div>
   );
}
 
export default Course;