import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { ACCESS_TOKEN_KEY, getItemsFromLocalStorage } from './utils';

// add Bearer token to axios api configuration
if (localStorage[ACCESS_TOKEN_KEY]) {
  const token = getItemsFromLocalStorage(ACCESS_TOKEN_KEY);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
