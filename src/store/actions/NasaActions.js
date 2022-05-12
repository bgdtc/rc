// IMPORTS
import axios from 'axios';

// TYPES D'ACTIONS
import { GET_NASA_DATA } from './ActionTypes';

// ACTIONS

// GET IMAGE OF THE DAY
export const getIotd = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=qwrcwaCmfGjEMANzBaawRqwk2UaA5dnksq04Uamf");
            dispatch({ type: GET_NASA_DATA, payload: response.data });
        } catch (err) {
            return console.log(err);
        }
    }
}

// GET IMAGE OF THE SELECTIONNED DAY
export const getImgSel = (query) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=qwrcwaCmfGjEMANzBaawRqwk2UaA5dnksq04Uamf&date=${query}`);
            dispatch({ type: GET_NASA_DATA, payload: response.data });
        } catch (err) {
            return console.log(err);
        }
    }
}
