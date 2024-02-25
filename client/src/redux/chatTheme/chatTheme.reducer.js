import { chatTheme } from "../../data/chatThemeData";
import { getItemsFromLocalStorage, setItemsInLocalStorage } from "../../utils";
import { SET_CHAT_THEME } from "./chatTheme.action";

// set initial state
const insitialState = {
  themeColor: JSON.parse(getItemsFromLocalStorage('CHAT_THEME')) || chatTheme[0].color
}


// chat theme reducer
const chatThemeReducer = (state = insitialState, action) => {
  switch(action.type){
    case SET_CHAT_THEME:
      setItemsInLocalStorage('CHAT_THEME', JSON.stringify(action.payload));
      return {
        ...state,
        themeColor: action.payload
      }

    default:
      return state;
  }
}


export default chatThemeReducer;