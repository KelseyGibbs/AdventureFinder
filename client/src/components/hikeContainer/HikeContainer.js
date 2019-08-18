import React, { Component } from "react";
import Card from "../card/Card";
import SearchForm from "../searchForm/SearchForm";
import HikeDetail from "../hikeDetail/HikeDetail";
import API from "../../utils/API";

class HikeContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the Hike "The Matrix"
  componentDidMount() {
    this.searchHikes("");
  }

  searchHikes = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchHikes(this.state.search);
  };

  render() {
    return (
        <div className="container">
        
        
       
            <Card
              heading={this.state.result.Title || "Search for a Hike to Begin"}
            >
              {this.state.result.Title ? (
                <HikeDetail
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
       

          
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>

      </div>
    );
  }
}

export default HikeContainer;
