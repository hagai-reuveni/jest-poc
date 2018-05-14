import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Users } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/users" component={Users} />
  </Switch>
);

export default Routes;