import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App_rxjs';

// import App2 from './App_redux';
// import { Provider } from "react-redux";
// import store from "./redux";

// commented lines are required for redux-versioned project
ReactDOM.render(
  <React.StrictMode>
    <App1 />
    {/* <Provider store={store}>
        <App2 />
      </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);