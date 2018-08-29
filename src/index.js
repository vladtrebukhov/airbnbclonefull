import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Results from "./components/results.jsx";
import NotFound from "./components/notfound.jsx";

import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/search/" component={Results} />
        <Switch component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
