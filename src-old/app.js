import React , { useContext } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo/todo.js';
import Form from './context/form';
import SettingsProvider from './context/settings';
import Header from './components/header/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginProvider from './context/Login';
import Login from './components/login/login';
import Auth from './components/auth/auth';

export default class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <Login />
        <Auth capability="read">
          <SettingsProvider>
            <Router>
              <Header />
              <Switch>
                <Route exact path='/'>
                  <ToDo />
                </Route>
                <Route exact path='/settings'>
                  <Form />
                </Route>
              </Switch>
            </Router>
          </SettingsProvider>
        </Auth>
        <Auth capability="update">
          {/* <button>Update Button</button> */}
        </Auth>
        <Auth capability="create">
          {/* <button>+ Create Button</button> */}
        </Auth>
        <Auth capability="delete">
          {/* <button>Delete Button</button> */}
        </Auth>
      </LoginProvider>
    );
  }
}