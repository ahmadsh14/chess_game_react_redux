import { pieces } from "./AllPieces";

export const statePieces = [
  [
    pieces.black.rook,
    pieces.black.knight,
    pieces.black.bishop1,
    pieces.black.queen,
    pieces.black.king,
    pieces.black.bishop2,
    pieces.black.knight,
    pieces.black.rook,
  ],
  [
    pieces.black.pawn1,
    pieces.black.pawn2,
    pieces.black.pawn3,
    pieces.black.pawn4,
    pieces.black.pawn5,
    pieces.black.pawn6,
    pieces.black.pawn7,
    pieces.black.pawn8,
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    pieces.black.pawn7,
    ""
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    pieces.white.pawn2
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    pieces.white.pawn1,
    ""
  ],
  [
    pieces.white.pawn1,
    pieces.white.pawn2,
    pieces.white.pawn3,
    pieces.white.pawn4,
    pieces.white.pawn5,
    pieces.white.pawn6,
    pieces.white.pawn7,
    pieces.white.pawn8,
  ],
  [
    pieces.white.rook,
    pieces.white.knight,
    pieces.white.bishop1,
    pieces.white.queen,
    pieces.white.king,
    pieces.white.bishop2,
    pieces.white.knight,
    pieces.white.rook,
  ],
];

export const initialState = {
  pieces: statePieces,
  currentPlayer: 'white',
  selectedPiece: null,
  validMoves: []
};