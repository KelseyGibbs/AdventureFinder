import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import HikeContainer from "../../components/hikeContainer/HikeContainer"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div  className="container dashboard">

<div className="navbar-fixed">
              <nav className="z-depth-0">
            <div className="nav-wrapper indigo lighten-5">
            <h4 className="left black-text heyThere">
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h4>
<Link 
to="/results"
className="btn right fake"
style={{
  width: "132px",
  borderRadius: "13px",
  letterSpacing: "1.5px",
  marginTop: "1rem",
}}
>Your Hikes</Link>
            <button
              style={{
                width: "132px",
                borderRadius: "13px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn right"
              >
              Logout
            </button>
            </div>
          </nav>
          </div>
             
        <HikeContainer></HikeContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
