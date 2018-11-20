import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Challenge from './components/Challenge'
import Error from './pages/Error';

export default () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/challenge' component={Challenge} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
)
