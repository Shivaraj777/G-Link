// imports
import { combineReducers } from 'redux';
import themeReducer from './theme/theme.reducer';

// combine reducers
const rootReducer = combineReducers({
    theme: themeReducer
});

export default rootReducer;