import React from 'react';
// import Router from 'react-router';
import {Switch} from 'react-router-dom';
import {BrowserRouter } from 'react-router-dom'
import {Route}  from 'react-router-dom';
import App from './frontend/components/App/App';
import WelcomeCard from './frontend/components/home/Welcome/Welcome.js';


const Routes = () => (
  // <Route>
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App}/>
      <Route exact path='/dashboard' component={WelcomeCard}/>
      {/* <Route path='/table' component={TablePage}/> */}
      {/* <Route path='/login' component={LoginPage}/> */}
      {/* <Route path='*' component={NotFoundPage}/> */}
    </div>
  </BrowserRouter>
);


export default Routes;
