/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import userHikes from "../../utils/userHikes";
import { List, ListItem } from "../../components/List";
import { If, Elif, Else } from 'rc-if-else';


class Results extends Component {
  constructor(){
    super();
    this.state = {
    hikes: [{"ascent": 1340,
      "date": "2019-09-20T16:55:51.609Z",
      "descent": -1342,
      "high": 911,
      "id": 7003859,
      "imgSmall": "https://cdn-files.apstatic.com/hike/7030317_small_1554926735.jpg",
      "length": "11.2",
      "location": "Forest Hills, Tennessee",
      "low": 591,
      "name": "Red, White, and Blue",
      "summary": "A nice singletrack course through Percy and Edwin Warner Parks.",
      "userid": "5d5425bb25562b3d3e2ff1e0"},{"ascent": 1340,
      "date": "2019-09-20T16:55:51.609Z",
      "descent": -1342,
      "high": 911,
      "id": 7003859,
      "imgSmall": "https://cdn-files.apstatic.com/hike/7030317_small_1554926735.jpg",
      "length": "11.2",
      "location": "Forest Hills, Tennessee",
      "low": 591,
      "name": "Red, White, and Blue",
      "summary": "A nice singletrack course through Percy and Edwin Warner Parks.",
      "userid": "5d5425bb25562b3d3e2ff1e0"}],
    set: false,
    id: ""
  }
  this.handleClick = this.handleClick.bind(this)
  };
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

    // When the component mounts, load all hikes and save them to this.state.hikes
    componentDidMount = () => {
      this.loadHikes()
    }
    
    sortmine = () => {
      let allhikes = this.state.hikes
      let userid = this.props.auth.user.id
      console.log(allhikes[7].userid)
      console.log(userid)


      let mine =  allhikes.filter(function(hike) {
        return hike.userid === userid 
      });
      console.log(mine)


      let mine2 = Array.from(new Set(mine.map(a => a.id)))
      .map(id => {
        return mine.find(a => a.id === id)
      })
      console.log(mine2)

      let dupes = mine.filter(function(hike) {
        return hike.id
      })
  
      console.log(dupes)
      
      this.setState({ hikes: mine2, set: true})
    }

     // Loads all hikes  and sets them to this.state.hikes
    loadHikes = () => {
      userHikes.getHikes()
        .then(res =>
          this.setState({ hikes: res.data }
            , function () {
              console.log(this.state.hikes)
              this.sortmine()
            }
          )
        )
        .catch(err => console.log(err));

    };
    
    handleClick = (
      id) => {
      event.preventDefault()
      console.log(id)
        userHikes.deleteHike(id)
        .then(res => this.loadHikes())
        .catch(err => console.log(err));
      
    };
  render() {
    const { user } = this.props.auth;
    // const { hikes } = this.state.hikes;

    return (
      <div  className="container">
      <div className="row">
<div className="navbar-fixed">
              <nav className="z-depth-0">
            <div className="nav-wrapper white">
            <h4 className="left black-text heyThere">
              <b>AdventureFinder</b>
            </h4>
            <p style={{
  position: "absolute",

  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",

  clip: "rect(0 0 0 0)",
  overflow: "hidden"
}}>userID: {user.id}</p>
<Link 
to="/dashboard"
className="btn fake"
style={{
  width: "132px",
  borderRadius: "13px",
  letterSpacing: "1.5px",
  marginTop: "1rem",
}}
>Search</Link>
            <button
              style={{
                width: "132px",
                borderRadius: "13px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn"
              >
              Logout
            </button>
            </div>
          </nav>
          </div>
              </div>
              <div className="row results">
              <div className="col s1"></div>
              <div className="col s10">
              <If condition={this.state.set === true}>
              { this.state.hikes.length ? (
                <List>
              {this.state.hikes.map(hikes => {
                return (
                  <ListItem key={hikes.id}>
    
  <div className="card">
    <div className="card-header">
        <h3>{hikes.name}</h3>
        <h5>{hikes.location}</h5>
    </div>
    <div className="card-body">
    <div className="text-center">
        <img alt={hikes.name} className="img-fluid" src={hikes.imgSmall} />
        <p>hikes ID: {hikes.id}</p>
        <p>Trail Length: {hikes.length}</p>
        <p>Summary: {hikes.summary}</p>
        <p>Ascent: {hikes.ascent}</p>
        <p>Descent: {hikes.descent}</p>
        <p>High: {hikes.high}</p>
        <p>Low: {hikes.low}</p>
        <p>userID: {user.id}</p>
    </div>
        <span className="delete-btn btn" role="button"
        onClick={() => this.handleClick( 
          hikes._id)}
          >Delete</span>
        </div>
  </div>
     
</ListItem>
        )
      })}
        </List>
          ) : (
            <div>
            <h3>No Saved Hikes to Display</h3>
            <h2>Search for Hikes from the dashboard!</h2>
            </div>
            )}  
            </If>

</div>
<div className="col s1"></div>
</div>
      </div>
    );
  }
}

Results.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Results);