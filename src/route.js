import React from 'react';
// import Router from 'react-router';
import {Switch} from 'react-router-dom';
import {BrowserRouter } from 'react-router-dom'
import {Route}  from 'react-router-dom';
import App from './frontend/components/App/App';
import NotFoundPage from './frontend/components/DummyPages/NotFoundPage.js';
import LoginPage from './frontend/components/DummyPages/LoginPage';
import FormPage from './frontend/components/DummyPages/FormPage';
import TablePage from './frontend/components/DummyPages/TablePage';
import WelcomeCard from './frontend/components/home/Welcome/Welcome';

// export default (
//   <Route>
//     <Route path="login" component={LoginPage}/>
//     <Route path="/" component={App}>
//       <IndexRoute component={Welcome}/>
//       <Route path="dashboard" component={Welcome}/>
//       <Route path="form" component={LoginPage}/>
//       <Route path="table" component={TablePage}/>
//       <Route path="*" component={NotFoundPage}/>
//      </Route>
//   </Route>
// );

const Routes = () => (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path = '/' component = {App} >
    {/* <Switch> */}
      <Route exact path='dashboard'  component={WelcomeCard}/>
      <Route path='dashboard' component={WelcomeCard}/>
      <Route path="form" component={LoginPage}/>
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>
    {/* </Switch> */}
    </Route>
  </Route>
)


export default Routes;
