import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";

import Main from "../pages/main";
import Gamer from "../pages/gamer";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/gamer" component={Gamer} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
