import React from "react";

const Row = props => {
  return (
    <div
      className={`row${props.fluid ? "-fluid" : ""} text-center theRow`}
      {...props}
    />
  );
};

export default Row;
