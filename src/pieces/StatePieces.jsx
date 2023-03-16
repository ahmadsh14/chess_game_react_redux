import { pieces } from "./AllPieces";

export const statePieces = [
  [
    { row: 0, col: 0, piece: pieces.black.rook },
    { row: 0, col: 1, piece: pieces.black.knight },
    { row: 0, col: 2, piece: pieces.black.bishop },
    { row: 0, col: 3, piece: pieces.black.queen },
    { row: 0, col: 4, piece: pieces.black.king },
    { row: 0, col: 5, piece: pieces.black.bishop },
    { row: 0, col: 6, piece: pieces.black.knight },
    { row: 0, col: 7, piece: pieces.black.rook },
  ],
  [
    { row: 1, col: 0, piece: pieces.black.pawn },
    { row: 1, col: 1, piece: pieces.black.pawn },
    { row: 1, col: 2, piece: pieces.black.pawn },
    { row: 1, col: 3, piece: pieces.black.pawn },
    { row: 1, col: 4, piece: pieces.black.pawn },
    { row: 1, col: 5, piece: pieces.black.pawn },
    { row: 1, col: 6, piece: pieces.black.pawn },
    { row: 1, col: 7, piece: pieces.black.pawn },
  ],
  [
    { row: 2, col: 0, piece: null },
    { row: 2, col: 1, piece: null },
    { row: 2, col: 2, piece: null },
    { row: 2, col: 3, piece: null },
    { row: 2, col: 4, piece: null },
    { row: 2, col: 5, piece: null },
    { row: 2, col: 6, piece: null },
    { row: 2, col: 7, piece: null },
  ],
  [
    { row: 0, col: 0, piece: pieces.white.rook },
    { row: 0, col: 1, piece: pieces.white.knight },
    { row: 0, col: 2, piece: pieces.white.bishop },
    { row: 0, col: 3, piece: pieces.white.queen },
    { row: 0, col: 4, piece: pieces.white.king },
    { row: 0, col: 5, piece: pieces.white.bishop },
    { row: 0, col: 6, piece: pieces.white.knight },
    { row: 0, col: 7, piece: pieces.white.rook },
  ]
]