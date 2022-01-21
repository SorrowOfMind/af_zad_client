import { ADD_CHANNEL, DELETE_CHANNEL, LOAD_CHANNELS } from "./types";
import axios from 'axios';

const baseUrl = "http://localhost:80/adsfox_zadanie/app/";

export const loadChannels = () => {
    const url = `${baseUrl}get.php/`;
  
    return async dispatch => {
        const res = await axios.get(url);
        const data = await res.data;
        dispatch({type: LOAD_CHANNELS, payload: data});
    }
}

export const addChannel = channelData => {
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

export const deleteChannel = id => {
    const url = `${baseUrl}delete.php?id=${id}`;
    return async dispatch => {
        try {
            const res = await axios.delete(url);
            const data = await res.data;
            console.log(data);
            dispatch({type: DELETE_CHANNEL, payload: id});
        } catch {
            throw new Error("Coś poszło nie tak. Spróbuj ponownie później");
        }
    }
}


