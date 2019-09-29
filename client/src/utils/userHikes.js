import axios from "axios";

export default {
  // Gets all hikes
  getHikes: function() {
    return axios.get("/api/hikes");
  },
  // Gets the hike with the given id
  getHike: function(id) {
    return axios.get("/api/hikes/" + id);
  },
  // Deletes the hike with the given id
  deleteHike: function(id) {
    return axios.delete("/api/hikes/" + id);
  },
  // Saves a hike to the database
  saveHike: function(hikeData) {
    return axios.post("/api/hikes", hikeData);
  }
};
