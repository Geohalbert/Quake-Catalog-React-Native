import axios from "axios";
const API_URL =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";

export default {
  getQuakeList: str => axios.get(`${API_URL}${str}`),
  getQuake: id => axios.get(`${API_URL}&eventid=${id}`)
};
