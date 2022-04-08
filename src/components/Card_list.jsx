import React from "react";
import Project_data from "./Project_data";
import Project_Card from "./Project_Card";
import "./Card_list.css";
function Card_list() {
  return (
    <div className="card-list">
      {Project_data.map((data) => {
        return (
          <Project_Card
            key={data.id}
            title={data.title}
            technology={data.Technology_Frameworh}
            homepage={data.homepage}
            url={data.url}
          />
        );
      })}
    </div>
  );
}

export default Card_list;
