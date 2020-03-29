import React from "react";

const Header = props => {
  return (
    <div>
      <h1>The Office Click Game!</h1>
      <p>{props.message}</p>
      <span>
        Current Score: {props.score} || Top Score: {props.topScore}
      </span>
    </div>
  );
};

export default Header;
