import {combineReducers} from 'redux';

import appstate , {APP_STATE} from './app.state';
import messagestate , {MESSAGE_STATE} from './message.state';

export default combineReducers({
    appstate,
    messagestate
});

export const DEFAULT_APP_STATE= {
    appstate: APP_STATE,
    messagestate: MESSAGE_STATE
}