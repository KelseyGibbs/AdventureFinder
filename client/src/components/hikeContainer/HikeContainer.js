import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import SearchForm from "../searchForm/SearchForm";
import HikeDetail from "../hikeDetail/HikeDetail";
import { If, Elif, Else } from 'rc-if-else';
var zipcodes = require('zipcodes');
const BASEURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10";
const APIKEY = "&key=200559603-3fbad4d84fcb99d1ee9432d2fcd6f2da";
const TOTAL = (BASEURL + APIKEY);
let searched = {
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
      },
      {
          "id": 7004682,
          "name": "Royal Arch Out and Back",
          "type": "Featured Hike",
          "summary": "A classic Boulder hike to a natural arch with great views.",
          "difficulty": "blueBlack",
          "stars": 4.4,
          "starVotes": 145,
          "location": "Boulder, Colorado",
          "url": "https:\/\/www.hikingproject.com\/trail\/7004682\/royal-arch-out-and-back",
          "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7002679_sqsmall_1554226731.jpg",
          "imgSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7002679_small_1554226731.jpg",
          "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/hike\/7002679_smallMed_1554226731.jpg",
          "imgMedium": "https:\/\/cdn-files.apstatic.com\/hike\/7002679_medium_1554226731.jpg",
          "length": 3.3,
          "ascent": 1311,
          "descent": -1312,
          "high": 6917,
          "low": 5691,
          "longitude": -105.283,
          "latitude": 39.9997,
          "conditionStatus": "All Clear",
          "conditionDetails": "",
          "conditionDate": "2019-07-21 14:20:07"
      },
      {
          "id": 7002439,
          "name": "Walker Ranch",
          "type": "Featured Hike",
          "summary": "An awesome and challenging hike near Boulder with great scenery.",
          "difficulty": "blueBlack",
          "stars": 4.5,
          "starVotes": 118,
          "location": "Coal Creek, Colorado",
          "url": "https:\/\/www.hikingproject.com\/trail\/7002439\/walker-ranch",
          "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7039625_sqsmall_1555092312.jpg",
          "imgSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7039625_small_1555092312.jpg",
          "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/hike\/7039625_smallMed_1555092312.jpg",
          "imgMedium": "https:\/\/cdn-files.apstatic.com\/hike\/7039625_medium_1555092312.jpg",
          "length": 7.6,
          "ascent": 1594,
          "descent": -1585,
          "high": 7335,
          "low": 6439,
          "longitude": -105.3378,
          "latitude": 39.9511,
          "conditionStatus": "All Clear",
          "conditionDetails": "Dry",
          "conditionDate": "2019-08-11 12:20:56"
      },
      {
          "id": 7011191,
          "name": "Green Mountain via Ranger\/Saddle Rock Loop",
          "type": "Featured Hike",
          "summary": "A loop with a variety of terrain, a lot of climbing, and great views of Boulder.",
          "difficulty": "blueBlack",
          "stars": 4.5,
          "starVotes": 77,
          "location": "Boulder, Colorado",
          "url": "https:\/\/www.hikingproject.com\/trail\/7011191\/green-mountain-via-rangersaddle-rock-loop",
          "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7003740_sqsmall_1554235436.jpg",
          "imgSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7003740_small_1554235436.jpg",
          "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/hike\/7003740_smallMed_1554235436.jpg",
          "imgMedium": "https:\/\/cdn-files.apstatic.com\/hike\/7003740_medium_1554235436.jpg",
          "length": 4.9,
          "ascent": 2305,
          "descent": -2277,
          "high": 8099,
          "low": 5806,
          "longitude": -105.2928,
          "latitude": 39.9975,
          "conditionStatus": "All Clear",
          "conditionDetails": "Dry",
          "conditionDate": "2019-08-03 18:22:28"
      },
      {
          "id": 7000000,
          "name": "Mount Sanitas Loop",
          "type": "Featured Hike",
          "summary": "Very popular and scenic loop right from the edge of town.",
          "difficulty": "blueBlack",
          "stars": 4.1,
          "starVotes": 102,
          "location": "Boulder, Colorado",
          "url": "https:\/\/www.hikingproject.com\/trail\/7000000\/mount-sanitas-loop",
          "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7039883_sqsmall_1555092747.jpg",
          "imgSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7039883_small_1555092747.jpg",
          "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/hike\/7039883_smallMed_1555092747.jpg",
          "imgMedium": "https:\/\/cdn-files.apstatic.com\/hike\/7039883_medium_1555092747.jpg",
          "length": 3.2,
          "ascent": 1281,
          "descent": -1280,
          "high": 6780,
          "low": 5521,
          "longitude": -105.2977,
          "latitude": 40.0202,
          "conditionStatus": "All Clear",
          "conditionDetails": "Dry",
          "conditionDate": "2019-08-27 15:10:20"
      },
      {
          "id": 7001019,
          "name": "Betasso Preserve",
          "type": "Featured Hike",
          "summary": "This hike is easily accessible from Boulder and offers amazing singletrack with beautiful views.",
          "difficulty": "blue",
          "stars": 4.2,
          "starVotes": 58,
          "location": "Boulder, Colorado",
          "url": "https:\/\/www.hikingproject.com\/trail\/7001019\/betasso-preserve",
          "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7029200_sqsmall_1554920151.jpg",
          "imgSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7029200_small_1554920151.jpg",
          "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/hike\/7029200_smallMed_1554920151.jpg",
          "imgMedium": "https:\/\/cdn-files.apstatic.com\/hike\/7029200_medium_1554920151.jpg",
          "length": 6.7,
          "ascent": 776,
          "descent": -778,
          "high": 6575,
          "low": 6178,
          "longitude": -105.3446,
          "latitude": 40.0164,
          "conditionStatus": "All Clear",
          "conditionDetails": "",
          "conditionDate": "2019-06-24 10:31:06"
      },
      {
          "id": 7017569,
          "name": "Marshall Mesa to Spring Brook Loop",
          "type": "Featured Hike",
          "summary": "Some of the best trails that Boulder has to offer with a variety of options that never get old.",
          "difficulty": "blue",
          "stars": 4.4,
          "starVotes": 25,
          "location": "Superior, Colorado",
          "url": "https:\/\/www.hikingproject.com\/trail\/7017569\/marshall-mesa-to-spring-brook-loop",
          "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7002458_sqsmall_1554226116.jpg",
          "imgSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7002458_small_1554226116.jpg",
          "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/hike\/7002458_smallMed_1554226116.jpg",
          "imgMedium": "https:\/\/cdn-files.apstatic.com\/hike\/7002458_medium_1554226116.jpg",
          "length": 11.1,
          "ascent": 893,
          "descent": -893,
          "high": 6236,
          "low": 5567,
          "longitude": -105.2313,
          "latitude": 39.9527,
          "conditionStatus": "All Clear",
          "conditionDetails": "Dry",
          "conditionDate": "2019-06-30 15:13:30"
      },
      {
          "id": 7004678,
          "name": "Welcome to Chautauqua",
          "type": "Featured Hike",
          "summary": "Perhaps the most popular (crowded!) hike in America. And for good reason.",
          "difficulty": "greenBlue",
          "stars": 4.3,
          "starVotes": 20,
          "location": "Boulder, Colorado",
          "url": "https:\/\/www.hikingproject.com\/trail\/7004678\/welcome-to-chautauqua",
          "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7003311_sqsmall_1554233834.jpg",
          "imgSmall": "https:\/\/cdn-files.apstatic.com\/hike\/7003311_small_1554233834.jpg",
          "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/hike\/7003311_smallMed_1554233834.jpg",
          "imgMedium": "https:\/\/cdn-files.apstatic.com\/hike\/7003311_medium_1554233834.jpg",
          "length": 1.3,
          "ascent": 436,
          "descent": -434,
          "high": 6139,
          "low": 5703,
          "longitude": -105.2829,
          "latitude": 39.9988,
          "conditionStatus": "Unknown",
          "conditionDetails": null,
          "conditionDate": "1970-01-01 00:00:00"
      }
  ],
  "success": 1
}

class HikeContainer extends Component {
constructor(){
  super();
    this.state = {
      result: {},
      search: "",
      hasSearched: false,
      hasErrors: false
  }
  };


  // When this component mounts, search for the Hikes
  componentDidMount() {
    this.searchHikes();
  }

  searchHikes = query => {  
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
    console.log(lat + "hey" + long)
    this.searchHikes(this.state.search)
    console.log(TOTAL)
    console.log(this.state.result)
    searched = this.state.result
    this.setState({hasSearched: true})
  };

  render() {
    return (
      <div>
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
            </Card>
            <If condition={this.state.hasSearched === true}>
            <Card heading={searched.trails[1].name || "hi"}>
            </Card>
            </If>
        </div>
    );
  }
}
export default HikeContainer;
