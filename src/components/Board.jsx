import React, { Fragment } from "react";
import classes from "./board.modules.css";

const Board = () => {
  const squares = [];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const squareColor = (row + col) % 2 === 0 ? "light" : "dark";
      squares.push(
        <div className={`square ${squareColor}`} key={`${row}-${col}`} />
      );
    }
  }
  // const boardSize = 8;
  // const board = [];

  // for (let row = 0; row < boardSize; row++) {
  //   for (let col = 0; col < boardSize; col++) {
  //     const isWhite = (row + col) % 2 === 0;
  //     const className = isWhite ? 'white' : 'black';
  //     const key = `${row},${col}`;
  //     const square = <div key={key} className={`chess-square ${className}`} />;
  //     board.push(square);
  //   }
  // }
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
