import React, { Fragment } from "react";
import classes from "./board.modules.css";
import { pieces } from "../pieces/AllPieces";
const Board = () => {
  // const squares = [];

  // for (let row = 0; row < 8; row++) {
  //   for (let col = 0; col < 8; col++) {
  //     const squareColor = (row + col) % 2 === 0 ? "light" : "dark";
  //     squares.push(
  //       <div className={`square ${squareColor}`} key={`${row}-${col}`} >{`${row}-${col}`}</div>
  //     );
  //   }
  // }
  const placeb = {}
  const board = [];
  const tes = pieces;
  console.log("tes: ", tes);
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isWhite = (row + col) % 2 === 0;
      const className = isWhite ? "light" : "dark";
      const key = `${row},${col}`;
      const square = (
        <div key={key} className={`square ${className}`}>
          <img src={tes.black.rook} className={classes.piece}/>
        </div>
      );
      board.push(square);
    }
  }

  return (
    <Fragment>
      <div className="main">
        <div className="chess-board">{board}</div>
      </div>
    </Fragment>
  );
};

export default Board;
