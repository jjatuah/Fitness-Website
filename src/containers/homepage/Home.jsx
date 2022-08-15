import React from 'react';
import "./Home.css";
import Navbar from '../../components/navbar/Navbar';
import Banner from '../banner/Banner';
import About from '../about/About';
import Achievement from '../../components/achievement/Achievement';
import Course from '../../components/course/Course';
import Join from '../join/Join';
import Member from '../../components/member/Member';
import Footer from '../../components/footer/Footer';
import Plan from '../../components/plan/Plan';
import Blog from '../../components/blog/Blog';
import img1 from "../../images/img-1.jpg";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";
import img4 from "../../images/img-4.jpg";
import img5 from "../../images/img-5.jpg";
import img6 from "../../images/img-6.jpg";
import team1 from "../../images/team-1.jpg";
import team2 from "../../images/team-2.jpg";
import team3 from "../../images/team-3.jpg";
import { CancelOutlined, Check } from '@material-ui/icons';


const Home = () => {
  return ( 
    <div className="home">
      <Navbar />
      <Banner />
      <About />
      <div className="achivements">
        <Achievement num="40+" win="Online courses" />
        <Achievement num="180+" win="online instructors" />
        <Achievement num="5000+" win="satisfied clients" />
        <Achievement num="350+" win="gym equipments" />
      </div>

      <div className="courses">
        <div className="headers">
          <h2 id='course'>Our Courses</h2>
          <h3>Our latest courses</h3>
        </div>

        <div className="coursesContainer">
          <Course img={img1} days="Mon-Sat" duration="2 hours" course="Building your dream body with simple exercises" />
          <Course img={img2} days="Mon-Sat" duration="2 hours" course="Full body workouts without equipments" />
          <Course img={img3} days="Mon-Sat" duration="2 hours" course="Building your Cadiovascular endurance" />
          <Course img={img4} days="Mon-Sat" duration="2 hours" course="General body fitness for health and wholeness" />
          <Course img={img5} days="Mon-Sat" duration="2 hours" course="Exercise, Good health and the mind" />
          <Course img={img6} days="Mon-Sat" duration="2 hours" course="Building your upper body strength" />
        </div>
      </div>

      <div className="plans">
        <div className="headers">
          <h2  id='plan'>Our Plans</h2>
          <h3>find a perfect plan</h3>
        </div>

        <div className="plansContainer">
          <Plan plan={"Basic Plan"} price="35" check={<Check style={{color: "#ff5421", paddingRight: "2.5px"}}/>} wrong={<CancelOutlined style={{color: "#ff5421", paddingRight: "2.5px"}}/>} />
          <Plan plan={"Advanced Plan"} price="70" check={<Check style={{color: "#ff5421", paddingRight: "2.5px"}}/>} wrong2={<CancelOutlined style={{color: "#ff5421", paddingRight: "2.5px"}}/>} good={<Check style={{color: "#ff5421", paddingRight: "2.5px"}}/>}/>
          <Plan plan={"Premium Plan"} price="100" check={<Check style={{color: "#ff5421", paddingRight: "2.5px"}}/>} good={<Check style={{color: "#ff5421", paddingRight: "2.5px"}}/>} good2={<Check style={{color: "#ff5421", paddingRight: "2.5px"}}/>}/>
        </div>
      </div>

      <Join />

      <div className="team">
        <div className="headers">
          <h2  id='team'>our team</h2>
          <h3>Meet The Expert Team</h3>
        </div>

        <div className="memberContainer">
          <Member img={team1} role="gym instructor" name="Catherine Davies" fb={"#"} tw="#" ins={"#"} lkdn="#" />

          <Member img={team2} role="gym instructor" name="Tyler James" fb={"#"} tw="#" ins={"#"} lkdn="#" />

          <Member img={team3} role="gym instructor" name="Danielle Daniels" fb={"#"} tw="#" ins={"#"} lkdn="#" />
        </div>
      </div>

      <div className="blogs">
          <div className="headers">
            <h2  id='blog'>our blogs</h2>
            <h3>Our Daily Posts</h3>
          </div>

          <div className="blogContainer">
            <Blog img={img1} topic={"make yourself stronger than your excuses"} date={"2nd june, 2022."}/>

            <Blog img={img2} topic={"make yourself stronger than your excuses"} date={"25th june, 2022."}/>

            <Blog img={img3} topic={"make yourself stronger than your excuses"} date={"2nd may, 2021."}/>
          </div>
        </div>

        <Footer />
    </div>
   );
}
 
export default Home;