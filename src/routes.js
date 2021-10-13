import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";

class Routes extends Component {
  render() {
    return (
      <Switch>
      <Route path="/" exact component={MainPage} />
    </Switch>
    );
  }
}

export default Routes;

