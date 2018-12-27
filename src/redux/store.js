import { createStore, applyMiddleware } from "redux";
import reduxArray from "redux-array";

import rootReducer, { DEFAULT_APP_STATE } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, DEFAULT_APP_STATE, composeEnhancers(
    applyMiddleware(reduxArray)
));
