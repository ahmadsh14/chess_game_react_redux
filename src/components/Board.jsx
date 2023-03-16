import React, { useState } from "react";
import "./board.css";
import { statePieces } from "../pieces/StatePieces";
import { useDispatch,useSelector } from "react-redux";
const Board = () => {
  const dispatch = useDispatch();
  // const piecePositionStore = useSelector((state) => state.piecePosition);
  const[piecePosition,setPiecePosition] = useState('')
  console.log('piecePosition: ', piecePosition);
  const piecePositionHandler = (event) => {
    setPiecePosition(event.target.id);
  };
  return (
    <div className="main">
      {statePieces.map((row, i) => (
        <div className="row" key={i}>
          {row.map((square, j) => (
            <div
              className={`square ${(i + j) % 2 === 0 ? "light" : "dark"}`}
              key={`${i}-${j}`}
              onClick={piecePositionHandler}
            >
              {square.Image && (
                <img src={square.Image} alt={square.id} id={`${i}-${j}`} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
