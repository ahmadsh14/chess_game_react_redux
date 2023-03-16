import { legacy_createStore } from "redux";

const initialState = {
    row: null,
    col: null,
}


const piecReducer = (state = initialState, action) => {
    console.log('action: ', action.type);




    // if (action.type === 'toggle') {
    //     return {
    //         showCounter: !state.showCounter,
    //         counter: state.counter,
    //     };
    // }

    return state;
}

const store = legacy_createStore(piecReducer)

export default store