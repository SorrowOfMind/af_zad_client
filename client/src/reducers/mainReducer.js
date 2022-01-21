import {ADD_CHANNEL} from '../actions/types';

const initialState = {
    channels: []
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CHANNEL:
            return {...state, channels: [...state.channels, action.payload]};
        default:
            return state;
    }
}

export default mainReducer;