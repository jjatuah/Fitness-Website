import { CalendarTodayOutlined, Person } from '@material-ui/icons';
import React from 'react';
import "./Blog.css";


const Blog = ({img, topic, date}) => {
  return ( 
    <div className="blog">
      <div className="blogImage">
        <img src={img} alt="" />
      </div>

      <div className="blogContent">
        <a href="#">{topic}</a>
        <div className="imageIcons">
          <span><CalendarTodayOutlined style={{color: "#ff5421", paddingRight: "5px"}}/>{date}</span>
          <span><Person style={{color: "#ff5421", paddingRight: "3px"}}/>by admin</span>
        </div>
      </div>
    </div>
   );
}
 
export default Blog;