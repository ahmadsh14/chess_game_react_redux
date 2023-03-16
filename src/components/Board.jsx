import React, { Fragment } from "react";
import classes from "./board.modules.css";

const Board = () => {
  const squares = [];
const piece={}
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const squareColor = (row + col) % 2 === 0 ? "light" : "dark";
      squares.push(
        <div className={`square ${squareColor}`} key={`${row}-${col}`} ></div>
      );
    }
  }

  const test = (e) => {
    console.log(e.target)
  }
  return (
    <Fragment>
      <div className="main">
        <div className="chess-board" onClick={test}>{squares}</div>
      </div>
    </Fragment>
  );
};

export default Board;
