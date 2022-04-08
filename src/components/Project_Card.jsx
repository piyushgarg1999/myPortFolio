import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
function Project_Card({ title, technology, homepage, url }) {
  const path = `/${title.toLocaleLowerCase()}`;
  console.log(path);
  const Handler = () => {
    alert(title);
  };
  return (
    <div className="Card">
      <div className="project-img">
        <img src={homepage} alt="Not Found" />
      </div>
      <div className="project-info">
        <NavLink className="nav-link-card" exact to={url}>
          {title}
        </NavLink>
      </div>
      {/* <button onClick={Handler}>Detail</button> */}
    </div>
  );
}

export default Project_Card;
