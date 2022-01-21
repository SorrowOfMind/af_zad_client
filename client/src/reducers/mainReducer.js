import {ADD_CHANNEL, LOAD_CHANNELS, DELETE_CHANNEL} from '../actions/types';

const initialState = {
    channels: []
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CHANNEL:
            return {...state, channels: [...state.channels, action.payload]};
        case LOAD_CHANNELS:
            return {...state, channels: [...action.payload]};
        case DELETE_CHANNEL:
            let filteredChannels = state.channels.filter((val, idx) => val.id != action.paylod);
            return {...state, channels: filteredChannels};
        default:
            return state;
    }
}

export default mainReducer;