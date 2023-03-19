import kingBlack from "../img/king-black.svg";
import bishopBlack from "../img/bishop-black.svg";
import knightBlack from "../img/knight-black.svg";
import pawnBlack from "../img/pawn-black.svg";
import queenBlack from "../img/queen-black.svg";
import rookBlack from "../img/rook-black.svg";

import kingWhite from "../img/king-white.svg";
import knightWhite from "../img/knight-white.svg";
import bishopWhite from "../img/bishop-white.svg";
import pawnWhite from "../img/pawn-white.svg";
import queenWhite from "../img/queen-white.svg";
import rookWhite from "../img/rook-white.svg";

export const pieces = {
  black: {
    king: { id: "kingB", Image: kingBlack },
    bishop: { id: "bishopB", Image: bishopBlack, color: 'black' },
    pawn1: { id: "pawnB1", Image: pawnBlack, color: 'black' },
    pawn2: { id: "pawnB2", Image: pawnBlack, color: 'black' },
    pawn3: { id: "pawnB3", Image: pawnBlack, color: 'black' },
    pawn4: { id: "pawnB4", Image: pawnBlack, color: 'black' },
    pawn5: { id: "pawnB5", Image: pawnBlack, color: 'black' },
    pawn6: { id: "pawnB6", Image: pawnBlack, color: 'black' },
    pawn7: { id: "pawnB7", Image: pawnBlack, color: 'black' },
    pawn8: { id: "pawnB8", Image: pawnBlack, color: 'black' },
    queen: { id: "queenB", Image: queenBlack },
    knight: { id: "knightB", Image: knightBlack },
    rook: { id: "rookB", Image: rookBlack },
  },
  white: {
    king: { id: "kingW", Image: kingWhite },
    knight: { id: "knightW", Image: knightWhite },
    bishop: { id: "bishopW", Image: bishopWhite, color: 'white' },
    pawn1: { id: "pawnW1", Image: pawnWhite, color: 'white', sol: 'p' },
    pawn2: { id: "pawnW2", Image: pawnWhite, color: 'white' },
    pawn3: { id: "pawnW3", Image: pawnWhite, color: 'white' },
    pawn4: { id: "pawnW4", Image: pawnWhite, color: 'white' },
    pawn5: { id: "pawnW5", Image: pawnWhite, color: 'white' },
    pawn6: { id: "pawnW6", Image: pawnWhite, color: 'white' },
    pawn7: { id: "pawnW7", Image: pawnWhite, color: 'white' },
    pawn8: { id: "pawnW8", Image: pawnWhite, color: 'white' },
    queen: { id: "queenW", Image: queenWhite },
    rook: { id: "rookW", Image: rookWhite },
  },
};
