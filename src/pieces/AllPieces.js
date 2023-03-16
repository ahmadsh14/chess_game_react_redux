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
    bishop: { id: "bishopB", Image: bishopBlack },
    pawn1: { id: "pawnB1", Image: pawnBlack },
    pawn2: { id: "pawnB2", Image: pawnBlack },
    pawn3: { id: "pawnB3", Image: pawnBlack },
    pawn4: { id: "pawnB4", Image: pawnBlack },
    pawn5: { id: "pawnB5", Image: pawnBlack },
    pawn6: { id: "pawnB6", Image: pawnBlack },
    pawn7: { id: "pawnB7", Image: pawnBlack },
    pawn8: { id: "pawnB8", Image: pawnBlack },
    queen: { id: "queenB", Image: queenBlack },
    knight: { id: "knightB", Image: knightBlack },
    rook: { id: "rookB", Image: rookBlack },
  },
  white: {
    king: { id: "kingW", Image: kingWhite },
    knight: { id: "knightW", Image: knightWhite },
    bishop: { id: "bishopW", Image: bishopWhite },
    pawn1: { id: "pawnW1", Image: pawnWhite },
    pawn2: { id: "pawnW2", Image: pawnWhite },
    pawn3: { id: "pawnW3", Image: pawnWhite },
    pawn4: { id: "pawnW4", Image: pawnWhite },
    pawn5: { id: "pawnW5", Image: pawnWhite },
    pawn6: { id: "pawnW6", Image: pawnWhite },
    pawn7: { id: "pawnW7", Image: pawnWhite },
    pawn8: { id: "pawnW8", Image: pawnWhite },
    queen: { id: "queenW", Image: queenWhite },
    rook: { id: "rookW", Image: rookWhite },
  },
};
