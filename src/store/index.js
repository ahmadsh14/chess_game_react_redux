import { legacy_createStore } from "redux";
import { initialState } from "../pieces/StatePieces";
export const SELECT_PIECE = 'SELECT_PIECE';
export const MOVE_PIECE = 'MOVE_PIECE';


// const selectPiece = () => ({
//     type: SELECT_PIECE,
//     payload:'' ,
// });




const pieceReducer = (state = initialState, action) => {
    if (action.type) {
        console.log('action.type: ', action.type);

    }

    return state;
}

const store = legacy_createStore(pieceReducer)

export default store