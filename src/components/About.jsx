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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          similique molestiae vel corrupti soluta architecto, inventore numquam
          quo amet assumenda molestias quasi adipisci ipsum sint praesentium
          illo commodi atque nesciunt consequatur. Libero, repellendus. Eligendi
          nostrum ipsa sapiente molestias, dicta incidunt iusto praesentium quia
          id fugit sint consequatur recusandae vitae sed, repellendus sequi vero
          natus, neque excepturi voluptas veniam est aut beatae! Earum tempora
          cum itaque ipsum impedit aut nesciunt accusamus voluptatum iusto
          fugiat, modi qui exercitationem magnam nostrum ut repellendus debitis
          dolorem quos? Necessitatibus, corporis! Nihil iste architecto officia
          vero tempore aut, aliquam natus odio quam, nesciunt, illum veritatis
          animi!
        </p>
      </div>
    </div>
  );
}

export default About;
