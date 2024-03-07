import React from "react";

const Square = ({ backgroundColor }) => {
  let squareStyles = {
    backgroundColor: backgroundColor,
    width: "800px",
    height: "200px",
  };
  return (
    <div className="square" style={squareStyles}>
      Square
    </div>
  );
};

export default Square;
