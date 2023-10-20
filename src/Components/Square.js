import { useState } from "react";

const Square = ({onClick, value, index}) => {

  const handleClick = () => {
    onClick(index);
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
