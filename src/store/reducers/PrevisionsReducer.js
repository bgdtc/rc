// IMPORT DES ACTIONS
import * as Actions from '../actions/ActionTypes'


// SELECTOR ----
const initialState = {
    data: []
};


// REUDCERS 
export function PrevisionsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
        case Actions.GET_PREVISIONS_DATA:
            return { data: action.payload }
    }
}
