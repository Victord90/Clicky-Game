import React from "react";
import style from "./style.css";

const Navbar = props => {
  return (
    <nav>
      <h1>The Office Click Game!</h1>
      <p>{props.message}</p>
      <span>
        Current Score: {props.score} || Top Score: {props.topScore}
      </span>
    </nav>
  );
};

export default Navbar;
