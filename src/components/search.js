import React from "react";
import "./search.css";

class Search extends React.Component {
  state = {};
  render() {
    let title = "Book unique homes and experiences.";
    return (
      <div className="form-wrapper">
        <h1 className="header-title"> {title} </h1>
        <h3 className="form-header where">WHERE</h3>
        <form className="where-input">
          <input type="text" placeholder="Anywhere" />
        </form>
        <span className="checkin">CHECKIN</span>
        <span className="checkout">CHECKOUT</span>
        <input className="checkin-input" type="text" placeholder="mm/dd/yyyy" />
        <input
          className="checkout-input"
          type="text"
          placeholder="mm/dd/yyyy"
        />

        <h3 className="form-header guests">GUESTS</h3>

        <input className="guest-selection" type="button" />

        <button className="searchbtn">Search</button>
      </div>
    );
  }
}

export default Search;
