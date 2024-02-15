// imports
import { combineReducers } from 'redux';
import themeReducer from './theme/theme.reducer';
import authReducer from './auth/auth.reducer';
import tabReducer from './tab/tab.reducer';
import userReducer from './user/user.reducer';

// combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    theme: themeReducer,
    tab: tabReducer
});

export default rootReducer;