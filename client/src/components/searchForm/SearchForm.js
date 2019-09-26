import React from "react";
import { Link } from "react-router-dom";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter your zipcode here."
          id="search"
        />
        <br />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="searchDrive"
          type="text"
          className="form-control"
          placeholder="How many miles are you willing to drive?"
          id="distance"
        />
        <br />
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="searchHike"
          type="text"
          className="form-control"
          placeholder="How many miles would you like to hike?"
          id="length"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
