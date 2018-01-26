
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './frontend/components/App/App';
import './style.css';
import Routes from './route.js';


// This one is already present in admin-on-rest Layout, but it seems it does nothing if called after the initial ReactDOM.render()
// @link https://github.com/callemall/material-ui/issues/4670#issuecomment-235031917
import injectTapEventPlugin from 'react-tap-event-plugin';
try {
    injectTapEventPlugin();
} catch (e) {
    // do nothing
}

ReactDOM.render((
  <BrowserRouter>
  <App />
</BrowserRouter>
), document.getElementById('root'));
