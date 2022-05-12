// IMPORT MODULES
import axios from 'axios';

// IMPORT ACTION TYPES
import { GET_PREVISIONS_DATA } from './ActionTypes'


// ACTIONS

export const getPrevisions = (query) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=d6abecc823dc41a0a15142614221105&lang=fr&q=${query}&aqi=no`);
            dispatch({ type: GET_PREVISIONS_DATA, payload: response.data });
        } catch (err) {
            return console.log(err);
        }
    }
}