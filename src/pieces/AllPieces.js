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
    king: { id: "kingB", Image: kingBlack, sim: 'K' },
    bishop1: { id: "bishopB1", Image: bishopBlack, color: 'black', sim: 'B' },
    bishop2: { id: "bishopB2", Image: bishopBlack, color: 'black', sim: 'B' },
    pawn1: { id: "pawnB1", Image: pawnBlack, color: 'black', sim: 'P' },
    pawn2: { id: "pawnB2", Image: pawnBlack, color: 'black', sim: 'P' },
    pawn3: { id: "pawnB3", Image: pawnBlack, color: 'black', sim: 'P' },
    pawn4: { id: "pawnB4", Image: pawnBlack, color: 'black', sim: 'P' },
    pawn5: { id: "pawnB5", Image: pawnBlack, color: 'black', sim: 'P' },
    pawn6: { id: "pawnB6", Image: pawnBlack, color: 'black', sim: 'P' },
    pawn7: { id: "pawnB7", Image: pawnBlack, color: 'black', sim: 'P' },
    pawn8: { id: "pawnB8", Image: pawnBlack, color: 'black', sim: 'P' },
    queen: { id: "queenB", Image: queenBlack, sim: 'Q' },
    knight: { id: "knightB", Image: knightBlack, sim: 'N' },
    rook: { id: "rookB", Image: rookBlack, sim: 'R' },
  },
  white: {
    king: { id: "kingW", Image: kingWhite, sim: 'K' },
    knight: { id: "knightW", Image: knightWhite, sim: 'N' },
    bishop1: { id: "bishopW1", Image: bishopWhite, color: 'white', sim: 'B' },
    bishop2: { id: "bishopW2", Image: bishopWhite, color: 'white', sim: 'B' },
    pawn1: { id: "pawnW1", Image: pawnWhite, color: 'white', sim: 'P' },
    pawn2: { id: "pawnW2", Image: pawnWhite, color: 'white', sim: 'P' },
    pawn3: { id: "pawnW3", Image: pawnWhite, color: 'white', sim: 'P' },
    pawn4: { id: "pawnW4", Image: pawnWhite, color: 'white', sim: 'P' },
    pawn5: { id: "pawnW5", Image: pawnWhite, color: 'white', sim: 'P' },
    pawn6: { id: "pawnW6", Image: pawnWhite, color: 'white', sim: 'P' },
    pawn7: { id: "pawnW7", Image: pawnWhite, color: 'white', sim: 'P' },
    pawn8: { id: "pawnW8", Image: pawnWhite, color: 'white', sim: 'P' },
    queen: { id: "queenW", Image: queenWhite, sim: 'Q' },
    rook: { id: "rookW", Image: rookWhite, sim: 'R' },
  },
};




