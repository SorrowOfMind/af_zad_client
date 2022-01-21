import {ADD_CHANNEL, LOAD_CHANNELS} from '../actions/types';

const initialState = {
    channels: []
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CHANNEL:
            return {...state, channels: [...state.channels, action.payload]};
        case LOAD_CHANNELS:
            console.log(action.payload);
        default:
            return state;
    }
}

export default mainReducer;