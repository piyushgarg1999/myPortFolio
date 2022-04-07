import React from "react";
import "./Home.css";
import Project_data from "./Project_data";
import Project_Card from "./Project_Card";
function Home() {
  return (
    <div className="home">
      <div className="intro">
        <h1 className="my-name">
          Hey There,
          <br /> i am
          <span class="span-name"> Piyush Garg</span> <br />i am a full stack
          developer
        </h1>
      </div>

      <h2 className="pro-title">This is all I Have</h2>

      <div className="card-list">
        {Project_data.map((data) => {
          return (
            <Project_Card
              key={data.id}
              title={data.title}
              technology={data.Technology_Frameworh}
              homepage={data.homepage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
