import { ADD_CHANNEL } from "./types";
import axios from 'axios';

const baseUrl = "http://localhost:80/adsfox_zadanie/app/";

export const addChannel = (channelData) => {
    const url = `${baseUrl}create.php/`;
    return async dispatch => {
        try {
            const res = await axios.post(url, channelData);
            const data = await res.data;
            console.log(data);
            dispatch({type: ADD_CHANNEL, payload: channelData});
        } catch {
            throw new Error("Coś poszło nie tak. Spróbuj ponownie później");
        }
    }
}
