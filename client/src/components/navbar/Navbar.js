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
              style={{
                fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;'
              }}
              className="brand-logo center black-text"
            >
             AdventureBound
            </Link>
            <Link
                to="/register"
                style={{
                  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;'
                }}
                className="right black-text"
              >
                Register
              </Link>
              <Link
                to="/login"
                style={{
                  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;'
                }}
                className="left black-text "
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
