import axios from "axios";
const BASEURL = "https://www.hikingproject.com/data/get-trailsby-id?ids=7001635,7002742,7000108,7002175,7000130";
const APIKEY = "&key=200559603-3fbad4d84fcb99d1ee9432d2fcd6f2da";

export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY);
  }
};
