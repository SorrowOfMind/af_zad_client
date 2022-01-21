import {ADD_CHANNEL, LOAD_CHANNELS, DELETE_CHANNEL, UPDATE_CHANNEL} from '../actions/types';

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
            let filteredChannels = state.channels.filter((val, idx) => val.id != action.payload);
            return {...state, channels: filteredChannels};
        case UPDATE_CHANNEL:
            const {id, num_clients} = action.payload;
            let newState = [...state.channels].map(channel => {
                if (channel.id == id)
                    channel.num_clients = parseInt(num_clients);
                return channel;
            });
            return {
                ...state,
                channels: newState
            }
        default:
            return state;
    }
}

export default mainReducer;