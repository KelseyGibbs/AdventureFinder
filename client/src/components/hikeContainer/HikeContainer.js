import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import SearchForm from "../searchForm/SearchForm";
import HikeDetail from "../hikeDetail/HikeDetail";
import { If } from 'rc-if-else';
const BASEURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10";
const APIKEY = "&key=200559603-3fbad4d84fcb99d1ee9432d2fcd6f2da";
const TOTAL = (BASEURL + APIKEY);

class HikeContainer extends Component {
constructor(){
  super();
    this.state = {
      result: {},
      search: "",
      hasErrors: false
  }
  };


  // When this component mounts, search for the Hikes
  componentDidMount() {
    this.searchHikes();
  }

  searchHikes = query => {    
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
    event.preventDefault();
    this.searchHikes(this.state.search);
    console.log(this.state.result.trails[1].name);
  };

  render() {
    const showResults = () => {
      this.setState({hasErrors: true});
  };
    return (
      <div>
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
            </Card>
            <If condition={this.state.hasErrors === true}>
            <Card heading="oh snap">
            </Card>
            </If>
        </div>
    );
  }
}
export default HikeContainer;
