import axios from "axios";
import api from "../utils/api";

const USGS_API_URL =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";

const FB_API_URL =
  "https://us-central1-react-native-quake-catalog.cloudfunctions.net/";

export default {
  getQuakeList: str => axios.get(`${USGS_API_URL}${str}`),
  getQuake: id => axios.get(`${USGS_API_URL}&eventid=${id}`),
  saveQuery: payload => api.post(`${FB_API_URL}saveQuery`, payload)
};
