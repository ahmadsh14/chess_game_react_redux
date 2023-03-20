import { legacy_createStore } from "redux";
import { initialState } from "../pieces/StatePieces";


// action types
export const MOVE_PAWN = "MOVE_PAWN";

// action creator
export const movePawn = () => {
  
}


  
  const boardReducer = (state = initialState, action) => {
    switch (action.type) {
      case MOVE_PAWN:
        return state;
    }
  };
  

const store = legacy_createStore(boardReducer)

export default store