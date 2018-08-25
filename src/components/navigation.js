import React from "react";
import "./navigation.css";

class Navigation extends React.Component {
  state = {};
  render() {
    let logo = require("./images/logo.png");
    return (
      <nav>
        <ul className="main-nav">
          <li>
            <img id="logo" alt="airbnb logo" src={logo} />
          </li>
          <li onClick={this.handleLogin}> Log in </li>
          <li onClick={this.handleSignup}> Sign up </li>
          <li onClick={this.handleHelp}> Help </li>
          <li onClick={this.handleEarn}> Earn Credit </li>
          <li onClick={this.handleHost}> Become a Host </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
