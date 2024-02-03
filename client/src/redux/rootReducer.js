// imports
import { combineReducers } from 'redux';
import themeReducer from './theme/theme.reducer';
import authReducer from './auth/auth.reducer';

// combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer
});

export default rootReducer;