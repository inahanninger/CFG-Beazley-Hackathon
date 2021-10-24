import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "./views/Components/Components.js";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import MarketPage from "views/MarketPage/MarketPage.js";
import RegistrationPage from './views/RegistrationPage/RegistrationPage.js';
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProfilePageCalculate from './views/ProfilePage/ProfilePageCalculate';
import Leaderboard from './views/ProfilePage/Leaderboard';


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/market-page" component={MarketPage} />
      <Route path="/registration" component={RegistrationPage}></Route>
      <Route path="/profile-page-calculate" component={ProfilePageCalculate}></Route>
      <Route path="/profile-page-leaderboard" component={Leaderboard}></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
