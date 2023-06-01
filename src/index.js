import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import contactReducer from './reducers/contactReducer';

const store = createStore(contactReducer, applyMiddleware(thunk));

const root = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
root
);

reportWebVitals(console.log); // Added console.log to reportWebVitals

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






