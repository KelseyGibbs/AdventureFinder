import React, { Component } from "react";
import { Link } from "react-router-dom";
import { If, ElIf, Else } from 'rc-if-else';

class Navbar extends Component {
  render() {
    return (
      <div>
          <If condition={ window.location.href.indexOf("dashboard") != -1 === true}>

              <ElIf condition={ window.location.href.indexOf("results") != -1 === true}>
              
              </ElIf>
              <Else>
              <div className="navbar-fixed">
              <nav className="z-depth-0">
            <div className="nav-wrapper blue-grey lighten-5">
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
              </Else>
              </If>
  </div>
    );
  }
}

export default Navbar;
