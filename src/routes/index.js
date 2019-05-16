import React, { Fragment } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import history from './history';
// import Footer from '../components/Footer';

import Login from '../pages/login';
import Gamer from '../pages/gamer';
import Businessman from '../pages/businessman';
import Signup from '../pages/signup';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/gamer" component={Gamer} />
        <Route exact path="/businessman" component={Businessman} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Fragment>
  </ConnectedRouter>
);

export default Routes;
