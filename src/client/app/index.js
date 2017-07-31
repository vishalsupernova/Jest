import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import display from './reducer.js';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

ReactDOM.render(<Provider store =  {createStore(display, applyMiddleware(thunk))}><App /></Provider>,
document.getElementById('root'));