import React from "react";
import pic from "./photo.jpg";
import "./About.css";
function About() {
  return (
    <div className="main-container">
      <div className="my-image">
        <img src={pic} alt="not found" />
      </div>
      <div className="about-me">
        <p className="intro">
          <span className="thought">
            <b>
              <i>
                A highly motivated and dedicated computer science student
                looking for a challenging position to utilize my software skills
                for the growth of the organization
              </i>
            </b>
          </span>
          <br />
          <b>
            <i>
              Hello Guys,
              <br />I am Piyush Garg a computer science engineering student .I
              am from bari dholpur rajasthan coming to skills i know java python
              and javascript in a programming languages i have also learn full
              stack web developement and i also have knowledge of data structure
              and algos
            </i>
          </b>
        </p>
      </div>
    </div>
  );
}

export default About;
