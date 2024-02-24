// action types
export const SET_CHAT_THEME = 'SET_CHAT_THEME';


// action creator to update chat theme
export const setChatTheme = (color) => {
  return {
    type: SET_CHAT_THEME,
    payload: color
  }
}