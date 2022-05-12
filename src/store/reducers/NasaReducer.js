// IMPORT DES ACTIONS
import * as Actions from '../actions/ActionTypes';



// SELECTOR STATE

const initialState = {
    data: []
};


// REDUCERS

export function NasaReducer(state = initialState , action) {
    switch (action.type) {
        default: 
          return state;
        case Actions.GET_NASA_DATA:
          return { data: action.payload };
    }
}
