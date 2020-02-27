import React from "react";
import "./TitleBar.css";

const TitleBar = props => (
  <div className="title-bar">

    <div className="title">
      {props.children}
      </div>

    <div className="score">
      Score: {props.score}
    </div>

    <div className="score">
      Best Score: {props.bestScore}
    </div>

  </div>
);

export default TitleBar;
