import axios from "axios";
const BASEURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10";
const APIKEY = "&key=200559603-3fbad4d84fcb99d1ee9432d2fcd6f2da";

export default {
  search: function() {
    return axios.get(BASEURL + APIKEY);
  }
};


