  
import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/todo/todo.js';
import Form from './context/form';
import SettingsProvider from './context/settings';
import Header from './components/header/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
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
    );
  }
}