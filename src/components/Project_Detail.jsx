import React from "react";
import "./Project_detail.css";
function Project_Detail(props) {
  return (
    <div className="card-detail">
      <div className="project-image">
        <img src={props.my_data.project_image} alt="notfound" />
      </div>
      <div className="project-detail">
        <h3 className="title-h">
          Name Of the Project=>
          <span className="title-name">{props.my_data.title}</span>
        </h3>
        <div className="description">
          <p>{props.my_data.description}</p>
        </div>

        <div className="div-tech-list">
          <ul className="ul-tech-list">
            <h2>Technology Used</h2>
            {props.my_data.Technology_Frameworh.FRONTEND.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project_Detail;
