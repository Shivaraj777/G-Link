import { TOGGLE_TAB } from "./tab.action";

// set initial state
const initialState = {
  tabIndex: 3
};

// tab reducer
const tabReducer = (state = initialState, action) => {
  switch(action.type){
    case TOGGLE_TAB:
      return {
        ...state,
        tabIndex: action.payload
      }

    default:
      return state;
  }
}

export default tabReducer;
