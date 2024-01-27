// imports
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";

// create the store
const store = createStore(rootReducer);

export default store;