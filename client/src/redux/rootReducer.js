// imports
import { combineReducers } from 'redux';
import themeReducer from './theme/theme.reducer';
import authReducer from './auth/auth.reducer';
import tabReducer from './tab/tab.reducer';
import userReducer from './user/user.reducer';
import chatReducer from './chat/chat.reducer';

// combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    chat: chatReducer,
    theme: themeReducer,
    tab: tabReducer
});

export default rootReducer;