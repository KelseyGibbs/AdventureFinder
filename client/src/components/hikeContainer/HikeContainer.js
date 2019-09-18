import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import SearchForm from "../searchForm/SearchForm";
import HikeDetail from "../hikeDetail/HikeDetail";
import { If, Elif, Else } from 'rc-if-else';
var zipcodes = require('zipcodes');

class HikeContainer extends Component {
  constructor(){
    super();
    this.state = {
      result: {
        "trails": [
            {
                "id": 7000130,
                "name": "Bear Peak Out and Back",
                "type": "Featured Hike",
                "summary": "A must-do hike for Boulder locals and visitors alike!",
                "difficulty": "blueBlack",
                "stars": 4.6,
                "starVotes": 108,
                "location": "Boulder, Colorado",
                "url": "https:\/\/www.hikingproject.com\/trail\/7000130\/bear-peak-out-and-back",
                "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7005382_sqsmall_1554312030.jpg",
                "imgSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7005382_small_1554312030.jpg",
                "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/hike\/7005382_smallMed_1554312030.jpg",
                "imgMedium": "https:\/\/cdn-files.apstatic.com\/hike\/7005382_medium_1554312030.jpg",
                "length": 5.7,
                "ascent": 2541,
                "descent": -2540,
                "high": 8342,
                "low": 6103,
                "longitude": -105.2755,
                "latitude": 39.9787,
                "conditionStatus": "All Clear",
                "conditionDetails": "",
                "conditionDate": "2019-08-10 16:37:58"
            },
            {
                "id": 7004226,
                "name": "Sunshine Lion's Lair Loop",
                "type": "Featured Hike",
                "summary": "Great Mount Sanitas views are the reward for this gentler loop in Sunshine Canyon.",
                "difficulty": "blue",
                "stars": 4.5,
                "starVotes": 103,
                "location": "Boulder, Colorado",
                "url": "https:\/\/www.hikingproject.com\/trail\/7004226\/sunshine-lions-lair-loop",
                "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7039883_sqsmall_1555092747.jpg",
                "imgSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7039883_small_1555092747.jpg",
                "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/hike\/7039883_smallMed_1555092747.jpg",
                "imgMedium": "https:\/\/cdn-files.apstatic.com\/hike\/7039883_medium_1555092747.jpg",
                "length": 5.3,
                "ascent": 1261,
                "descent": -1282,
                "high": 6800,
                "low": 5530,
                "longitude": -105.2979,
                "latitude": 40.02,
                "conditionStatus": "All Clear",
                "conditionDetails": "Dry - Careful of ticks in the high grass along Sunshine right now!",
                "conditionDate": "2019-07-10 14:09:36"
            },
            {
                "id": 7011192,
                "name": "Boulder Skyline Traverse",
                "type": "Featured Hike",
                "summary": "The classic long mountain route in Boulder.",
                "difficulty": "black",
                "stars": 4.7,
                "starVotes": 70,
                "location": "Superior, Colorado",
                "url": "https:\/\/www.hikingproject.com\/trail\/7011192\/boulder-skyline-traverse",
                "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7048859_sqsmall_1555540136.jpg",
                "imgSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7048859_small_1555540136.jpg",
                "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/hike\/7048859_smallMed_1555540136.jpg",
                "imgMedium": "https:\/\/cdn-files.apstatic.com\/hike\/7048859_medium_1555540136.jpg",
                "length": 16.3,
                "ascent": 5409,
                "descent": -5492,
                "high": 8492,
                "low": 5417,
                "longitude": -105.2582,
                "latitude": 39.9388,
                "conditionStatus": "All Clear",
                "conditionDetails": "Dry",
                "conditionDate": "2019-07-30 17:52:30"
            }
        ],
        "success": 1
      },
      search: "",
      hasSearched: false,
      hasErrors: false,
      hike: {}
    }
  };
  
  
  // When this component mounts, search for the Hikes
  componentDidMount() {
    const query = "?lat=40.0274&lon=-105.2519&maxDistance=10";
    this.searchHikes(query);
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


handleClick = event => {
  event.preventDefault()
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
  console.log(this.state.hike)
};

  render() {
    return (
      <div className="row">
          <div id="dash" className="landing-copy col s12 center-align">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                
                />
            </Card>
            <If 
                condition={this.state.hasSearched === true}>
                
      <form>

      <div className="card">
      <input type="hidden" name="hike" value={this.state.result.trails[1].id} />
      <div className="card-header">
      <h1>{this.state.result.trails[1].name}</h1>
                <div className="text-center">
                    <img alt={this.state.result.trails[1].name} className="img-fluid" src={this.state.result.trails[1].imgSmall} />
                </div>
      </div>
      <div className="card-body">
            {/* <input type="button" className="btn" value={this.state.result.trails[1].id} defaultChecked={false} onClick={((event) => this.handleClick(event, this.state.result.trails[1].id))}/> */}
            <span className="save-btn btn" role="button"
            value={this.state.result.trails[1].id}
            onClick={this.handleClick}
            >Save Hike</span>
    
                </div>
     </div>
            </form>
            </If>
          </div>
      </div>
    );
  }
}

export default HikeContainer;
