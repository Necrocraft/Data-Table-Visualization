import {CHORD_DATA} from "../actions/types";


const INITIAL_STATE = {
    matrix: [],
    keys: [],
};

export const TableReducer = (state = INITIAL_STATE, action) => {
    let newState = Object.assign({}, state);
    
    if(action.type === CHORD_DATA) {
        newState.matrix = [...action.data];
        newState.keys = [...action.keys];
        console.log("New State", newState);
        return newState;
    }

	return state;
};