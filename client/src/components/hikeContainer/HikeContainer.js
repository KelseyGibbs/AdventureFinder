/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Card from "../card/Card";
import SearchForm from "../searchForm/SearchForm";
import { List, ListItem } from "../../components/List";
import userHikes from "../../utils/userHikes";
var zipcodes = require('zipcodes');

class HikeContainer extends Component {
  constructor(){
    super();
    this.state = {
      result: {
        "trails": [],
        "success": 1
      },
      search: "",
      searchDrive: null,
      searchHike: null,
      hasSearched: false,
      hasErrors: false,
      hike: {},
      userid: "",
      id: "",
      name: "",
      location: "",
      length: null,
      summary: "",
      ascent: null,
      descent: null,
      high: null,
      low: null,
      imgSmall: "",
      weird: ""
    }
    this.handleClick = this.handleClick.bind(this)
  };
  
  
  // When this component mounts, search for the Hikes
  componentDidMount() {
    // const query = "?lat=40.0274&lon=-105.2519&maxDistance=10";
    // this.searchHikes(query);
  }
  
  searchHikes = query => { 
    const BASEURL = "https://www.hikingproject.com/data/get-trails";
    const APIKEY = "&key=200559603-3fbad4d84fcb99d1ee9432d2fcd6f2da";
    const TOTAL = (BASEURL + query + APIKEY);
    console.log(TOTAL)  
      fetch(TOTAL)
      .then(res => res.json())
      .then(res => this.setState({ result: res }))
      .catch(() => this.setState({ hasErrors: true }));
    };    
  

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault()
    var zip = zipcodes.lookup(this.state.search)
    var lat = zip.latitude
    var long = zip.longitude
    var maxDistance = this.state.searchDrive;
    var minLength = this.state.searchHike
    var query = "?lat=" + lat + "&lon=" + long + "&maxDistance=" + maxDistance + "&minLength=" + minLength;
    
    this.searchHikes(query)
    this.setState({ searched: this.state.result })
    console.log(this.state.result);
    this.setState({hasSearched: true})
  }


handleClick = (
  userid,
  id, 
  name, 
  location, 
  length, 
  summary, 
  ascent, 
  descent, 
  high, 
  low,
  imgSmall) => {
  event.preventDefault()
  var weird = userid + id;
  console.log(weird)
  this.setState({
    userid: userid,
    id: id,
    name: name,
    location: location,
    length: length,
    summary: summary,
    ascent: ascent,
    descent: descent,
    high: high,
    low: low,
    imgSmall: imgSmall,
    weird: weird
  }, function () {
    userHikes.saveHike({
      userid: this.state.userid,
      id: this.state.id,
      name: this.state.name,
      location: this.state.location,
      length: this.state.length,
      summary: this.state.summary,
      ascent: this.state.ascent,
      descent: this.state.descent,
      high: this.state.high,
      low: this.state.low,
      imgSmall: this.state.imgSmall,
      weird: this.state.weird
    })
      .then(response => { 
        console.log(response)})
      .catch(error => {
        console.log(error.response)})
  })
};

  render() {
    const { user } = this.props.auth;
    return (
      <div className="row thisdash">
      <div id="dash" className="landing-copy col s12 center-align">
        <Card heading="Search">
          <SearchForm
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            
            />
        </Card>
          { this.state.result.trails.length ? (
            <List>
              {this.state.result.trails.map(trails => {
                return (
                  <ListItem key={trails.id}>

    
  <div className="card">
    <div className="card-header">
        <h3>{trails.name}</h3>
        <h5>{trails.location}</h5>
    </div>
    <div className="card-body">
    <div className="text-center">
        <img alt={trails.name} className="img-fluid" src={trails.imgSmall} />
        <p>Trails ID: {trails.id}</p>
        <p>Trail Length: {trails.length}</p>
        <p>Summary: {trails.summary}</p>
        <p>Ascent: {trails.ascent}</p>
        <p>Descent: {trails.descent}</p>
        <p>High: {trails.high}</p>
        <p>Low: {trails.low}</p>
        <p>userID: {user.id}</p>
    </div>
        <span className="save-btn btn" role="button"
        onClick={() => this.handleClick( 
          user.id,
          trails.id, 
          trails.name, 
          trails.location, 
          trails.length,  
          trails.summary, 
          trails.ascent, 
          trails.descent, 
          trails.high, 
          trails.low,
          trails.imgSmall)}
        >Save Hike</span>
        
        </div>
  </div>
     
</ListItem>
        )
      })}
        </List>
          ) : (
            <h3>Enter your zip code to find hikes near you!</h3>
)}  
      </div>
    </div>
    );
    }
    }


HikeContainer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(HikeContainer);
