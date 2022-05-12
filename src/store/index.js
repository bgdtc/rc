// IMPORTS REACT
import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// IMPORTS REDUCERS
import { PrevisionsReducer } from './reducers/PrevisionsReducer'
import { NasaReducer } from './reducers/NasaReducer'


// REDUCERS

const rootReducer = combineReducers({
    previsions: PrevisionsReducer,
    iotd: NasaReducer,
});


// EXPORT STORE
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// pour la prod
// export const store = createStore(rootReducer);