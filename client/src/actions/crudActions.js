import { ADD_RECORD } from "./types";
import axios from 'axios';

const url = "http://localhost:80/adsfox_zadanie/server/";

export const addRecord = data => {
    console.log(data);
    return async dispatch => {
        try {
            await axios.post(url, data);
            dispatch({type: ADD_RECORD, payload(data)})
        } catch {
            throw new Error("Coś poszło nie tak. Spróbuj ponownie później");
        }
    }
}
