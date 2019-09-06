const BASEURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10";
const APIKEY = "&key=200559603-3fbad4d84fcb99d1ee9432d2fcd6f2da";
const TOTAL = (BASEURL + APIKEY);

export default {
  search: function() {

  fetch(TOTAL)
  .then(function(response) {
    console.log("response" + response)
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    return (JSON.stringify(myJson));
    
  })
  }
};


