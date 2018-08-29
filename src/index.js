import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Results from "./components/results.jsx";
import NotFound from "./components/notfound.jsx";
import { PropTypes } from "prop-types";

import { Router, Route, Switch } from "react-router";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/search" component={Results} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
