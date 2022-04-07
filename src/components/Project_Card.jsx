import React from "react";
import "./Card.css";
function Project_Card({ title, technology, homepage }) {
  return (
    <div className="Card">
      <div className="project-img">
        <img src={homepage} alt="Not Found" />
      </div>
      <div className="project-info">
        <h6 className="project-title">{title}</h6>
      </div>
    </div>
  );
}

export default Project_Card;
