import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              className="brand-logo center black-text"
            >
             AdventureBound
            </Link>
            <Link
                to="/register"
                className="right black-text registerlink"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="left black-text loginlink"
              >
                Log In
              </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
