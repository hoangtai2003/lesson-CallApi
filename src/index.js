import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, compose, applyMiddleware} from 'redux';
import appReducers from './reducers/index'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducers, composeEnhancer(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
        <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
