import React, { Fragment } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import history from "./history";
//import Footer from '../components/Footer';

import Login from "../pages/login";
import Main from "../pages/main";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </Fragment>
  </ConnectedRouter>
);

export default Routes;
