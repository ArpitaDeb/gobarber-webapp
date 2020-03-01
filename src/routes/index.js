import React from 'react';
import { Switch, Route } from 'react-router-dom';

// External routes
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// Internal routes
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}