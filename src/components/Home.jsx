import React from "react";
import "./Home.css";
import Project_data from "./Project_data";
import Project_Card from "./Project_Card";
import Card_list from "./Card_list";
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
      <div className="Card-div">
        <Card_list />
      </div>
    </div>
  );
}

export default Home;
