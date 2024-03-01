// imports
import { combineReducers } from 'redux';
import themeReducer from './theme/theme.reducer';
import authReducer from './auth/auth.reducer';
import tabReducer from './tab/tab.reducer';
import userReducer from './user/user.reducer';
import chatReducer from './chat/chat.reducer';
import chatThemeReducer from './chatTheme/chatTheme.reducer';
import messageReducer from './message/message.reducer';

// combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    chat: chatReducer,
    message: messageReducer,
    theme: themeReducer,
    chatTheme: chatThemeReducer,
    tab: tabReducer
});

export default rootReducer;