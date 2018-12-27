import { 
    SHOW_LOADER, HIDE_LOADER,
    NETWORK_CONNECTION_AVAILABLE, NETWORK_CONNECTION_NOT_AVAILABLE
 } from '../actions';

export const APP_STATE = {
    loader: false,
    network_available: null
}

export default function reducer(state = APP_STATE, action) {

    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loader : true };

        case HIDE_LOADER:
            return { ...state, loader : false };
        
        case NETWORK_CONNECTION_AVAILABLE:
            return { ...state, network_available : true };

        case NETWORK_CONNECTION_NOT_AVAILABLE:
            return { ...state, network_available : false };

        default:
            return state;
    }
}