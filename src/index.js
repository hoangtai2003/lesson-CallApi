import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux';
import appReducers from './reducers/index'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
const store = createStore (
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
        <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
