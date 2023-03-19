import { legacy_createStore } from "redux";
import { initialState } from "../pieces/StatePieces";
export const SELECT_PIECE = 'SELECT_PIECE';
export const MOVE_PIECE = 'MOVE_PIECE';

const selectPiece = (piece) => ({
    type: SELECT_PIECE,
    payload: piece,
});

const movePiece = (toPosition) => ({
    type: MOVE_PIECE,
    payload: toPosition,
});

// Define a function to calculate valid moves for a pawn
const getValidMoves = (state, row, col) => {
    const currentPiece = state.pieces[row][col];

    // Check if the current piece is a pawn
    if (currentPiece !== "♟" && currentPiece !== "♙") {
        return [];
    }

    const moves = [];
    const direction = currentPiece === "♟" ? 1 : -1; // Black pawns move up, white pawns move down

    // Check if the square directly in front of the pawn is empty
    if (state.pieces[row + direction][col] === "") {
        moves.push([row + direction, col]);

        // Check if the pawn is in its starting position and the square two squares in front of the pawn is empty
        if ((direction === 1 && row === 1) || (direction === -1 && row === 6)) {
            if (state.pieces[row + 2 * direction][col] === "") {
                moves.push([row + 2 * direction, col]);
            }
        }
    }

    // Check if the pawn can capture diagonally
    if (col > 0 && state.pieces[row + direction][col - 1] !== "" && state.pieces[row + direction][col - 1].charAt(0) !== currentPiece.charAt(0)) {
        moves.push([row + direction, col - 1]);
    }
    if (col < 7 && state.pieces[row + direction][col + 1] !== "" && state.pieces[row + direction][col + 1].charAt(0) !== currentPiece.charAt(0)) {
        moves.push([row + direction, col + 1]);
    }

    return moves;
};

const pieceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PIECE:
            return {
                ...state,
                selectedPiece: action.payload,
            };
        case MOVE_PIECE:
            const { row, col } = state.selectedPiece;
            const validMoves = getValidMoves(state, row, col);
            if (validMoves.some(move => move[0] === action.payload[0] && move[1] === action.payload[1])) {
                const newPieces = [...state.pieces];
                newPieces[action.payload[0]][action.payload[1]] = state.pieces[row][col];
                newPieces[row][col] = "";
                return {
                    ...state,
                    pieces: newPieces,
                    currentPlayer: state.currentPlayer === 'white' ? 'black' : 'white',
                    selectedPiece: null,
                };
            } else {
                return state;
            }
        default:
            return state;
    }
}

const store = legacy_createStore(pieceReducer);

export default store;
