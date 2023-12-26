import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

//store creation
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import reducer from './reducers';

//make the store aware of the middleware
import middleware from "./middleware";

import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <h1>Testing Rendering</h1>
        <p>This is a test component to check if rendering works.</p>
      </Router>
  </Provider>
  , document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*

*/