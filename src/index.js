import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "./views/Components/Components.js";
import LandingPage from "./views/LandingPage/LandingPage.js";
import ProfilePageOld from "./views/ProfilePage/ProfilePageOld.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
<<<<<<< HEAD
import RegistrationPage from "./views/RegistrationPage/RegistrationPage.js";
import MarketPage from "views/MarketPage/MarketPage.js";
=======
import RegistrationPage from './views/RegistrationPage/RegistrationPage.js';
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProfilePageCalculate from './views/ProfilePage/ProfilePageCalculate';
>>>>>>> 2e913a96819d27abbd8b0552123d36f57dd48e3d

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/profile-page-old" component={ProfilePageOld} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/market-page" component={MarketPage} />
      <Route path="/registration" component={RegistrationPage}></Route>
      <Route path="/profile-page-calculate" component={ProfilePageCalculate}></Route>
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
