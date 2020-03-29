import React from "react";
import style from "./style.css";

const Header = props => {
  return (
    <div>
      <h1>The Office Click Game!</h1>
      <p>{props.message}</p>
      <span id="score">
        Current Score: {props.score} || Top Score: {props.topScore}
      </span>
    </div>
  );
};

export default Header;
