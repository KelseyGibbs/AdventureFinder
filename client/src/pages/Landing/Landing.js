import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container valign-wrapper landing">
        <div className="row flex">
          <div className="col s12 center-align">
            <p className="flow-text grey-text text-darken-1">
              The trails are waiting. Find hiking adventures near you. 
            </p>
            <br />
            <div className="row flex">
              <div className="col s12 center-align">
              <Link
                to="/register"
                style={{
                  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;'
                }}
                className="black-text"
              >
                Start your Adventure
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
