import React from "react";
import "./search.css";

class Search extends React.Component {
  constructor() {
    super();
    this.goToResults = this.goToResults.bind(this);
  }

  goToResults(event) {
    event.preventDefault();
    this.context.history.pushState(null, "/search");
    const input = {
      location: this.location.value,
      checkin: this.checkin.value,
      checkout: this.checkout.value,
      guests: this.guests.value
    };
  }

  render() {
    let title = "Book unique homes and experiences.";
    return (
      <div className="form-wrapper">
        <h1 className="header-title"> {title} </h1>
        <h3 className="form-header where">WHERE</h3>
        <form className="where-input">
          <input
            ref={input => (this.location = input)}
            type="text"
            placeholder="Anywhere"
          />
        </form>
        <span className="checkin">CHECKIN</span>
        <span className="checkout">CHECKOUT</span>
        <input
          ref={input => (this.checkin = input)}
          className="checkin-input"
          type="text"
          placeholder="mm/dd/yyyy"
        />
        <input
          ref={input => (this.checkout = input)}
          className="checkout-input"
          type="text"
          placeholder="mm/dd/yyyy"
        />

        <h3 className="form-header guests">GUESTS</h3>

        <input
          ref={input => (this.guests = input)}
          className="guest-selection"
          type="text" // change to dropdown menu later
        />

        <button
          onClick={event => this.goToResults(event)}
          className="searchbtn"
        >
          Search
        </button>
      </div>
    );
  }
}

Search.contextTypes = {
  history: RouterPropTypes.history
};

export default Search;
