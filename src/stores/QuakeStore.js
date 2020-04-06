import { observable, action, computed } from "mobx";
import { Alert } from "react-native";
import autobind from "autobind-decorator";
import QUAKESERVICE from "../service/quake.service";
// import QuakeList from "./models/QuakeList";

@autobind
class QuakeStore {
  @observable _quakes = [];

  @observable _quake = {};

  constructor() {}

  @action
  query(str) {
    return QUAKESERVICE.getQuakeList(str)
      .then(res => {
        if (res.data) {
          this.quakes = res.data.features;
        }
      })
      .catch(e => {
        Alert.alert(e.message);
      });
  }

  @action
  findQuake(id) {
    return QUAKESERVICE.getQuake(id)
      .then(res => {
        if (res.length > 0) {
          this.quake = res.data;
        }
      })
      .catch(e => {
        Alert.alert(e.message);
      });
  }

  @action
  saveQuery = payload => {
    return QUAKESERVICE.saveQuery(payload);
  };

  @computed
  get quake() {
    return this._quake || {};
  }

  set quake(quake) {
    this._quake = quake;
  }

  @computed
  get quakes() {
    return this._quakes || [];
  }

  set quakes(quakes) {
    this._quakes = quakes;
  }
}

export default new QuakeStore();
