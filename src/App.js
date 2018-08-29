import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation.js";
import Search from "./components/search.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: []
    };
  }

  render() {
    return (
      <div className="main-container">
        <div className="header-container">
          <Navigation />
        </div>
        <div className="search">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
