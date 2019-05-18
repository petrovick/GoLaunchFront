import React, { Fragment } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import history from './history';
// import Footer from '../components/Footer';

import Login from '../pages/login';

import Gamer from '../pages/gamer';
import NewGame from '../pages/gamer/newgame';
import EditGamerGame from '../pages/gamer/editgamergame';

import Businessman from '../pages/businessman';
import Signup from '../pages/signup';
import Rank from '../pages/businessman/rank';

import Global from '../styles/global';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Fragment>
      <Global />
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/gamer" component={Gamer} />
        <Route exact path="/gamer/newgame" component={NewGame} />
        <Route exact path="/gamer/editgamergame/:game" component={EditGamerGame} />

        <Route exact path="/businessman" component={Businessman} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/businessman/gamerank/:game" component={Rank} />
      </Switch>
    </Fragment>
  </ConnectedRouter>
);

export default Routes;
