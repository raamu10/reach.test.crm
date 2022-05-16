import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

// UI imports
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const {PUBLIC_URL} = process.env;

/* const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router basename={PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>
); */

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/reach.test.crm">  {/* basename={PUBLIC_URL}> */}
      <App />
    </Router>
  </React.StrictMode>
  ,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
