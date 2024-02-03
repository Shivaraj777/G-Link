// imports
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import { thunk } from 'redux-thunk';

// set redux middleware
const middleware = [thunk];

// create the store
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;