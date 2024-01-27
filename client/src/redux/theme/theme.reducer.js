export { TOGGLE_DARKTHEME } from './theme.action';

// set initial state
const initialState = {
  darkThemeEnabled: localStorage.getItem('DARK_THEME') || false
}

/* Theme reducer - return updated theme state */
const themeReducer = (state = initialState, action) => {
  switch(action.type){
    case TOGGLE_DARKTHEME:
      const mode = !state.darkThemeEnabled;
      localStorage.setItem('DARK_THEME', mode);

      return {
        ...state,
        darkThemeEnabled: mode
      }
  }
}

export default themeReducer;