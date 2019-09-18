/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import SearchForm from "../searchForm/SearchForm";
import HikeDetail from "../hikeDetail/HikeDetail";
import { List, ListItem } from "../../components/List";
import { If, Elif, Else } from 'rc-if-else';
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
      hasSearched: false,
      hasErrors: false,
      hike: {}
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
    console.log(query)  
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
    var query = "?lat=" + lat + "&lon=" + long;
    this.searchHikes(query)
    this.setState({ searched: this.state.result })
    console.log(this.state.result);
    this.setState({hasSearched: true})
  }


handleClick = id => {
  event.preventDefault()
  const value = id;
  // const { name, value } = event.target;
  // this.setState({
  //   [name]: value
  // });
  console.log(value);
};

  render() {
    return (
      <div className="row">
      <div id="dash" className="landing-copy col s12 center-align">
        <Card heading="Search">
          <SearchForm
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            
            />
        </Card>
          {this.state.result.trails.length ? (
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
        <p>Trail Length: {trails.id}</p>
        <p>Summary: {trails.summary}</p>
        <p>Ascent: {trails.ascent}</p>
        <p>Descent: {trails.descent}</p>
        <p>High: {trails.high}</p>
        <p>Low: {trails.low}</p>
    </div>
        <span className="save-btn btn" role="button"
        onClick={() => this.handleClick(trails.id)}
        >Save Hike</span>
        
        </div>
  </div>
     
</ListItem>
        )
      })}
        </List>
          ) : (
            <h3>No Results to Display</h3>
)}  
      </div>
    </div>
    );
    }
    }

export default HikeContainer;
