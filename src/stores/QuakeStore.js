import { observable, action, computed } from "mobx";
import { Alert } from "react-native";
import autobind from "autobind-decorator";
import QUAKESERVICE from "../service/quake.service";

@autobind
class QuakeStore {
  @observable _quakes = [];

  @observable _quake = {};

  constructor() {}

  @action
  query(str) {
    return QUAKESERVICE.getQuakeList(str).then(res => {
      if (res.length > 0) {
        this.quakes = res.data.features;
      } else {
        Alert("No results match your criteria");
      }
    });
  }

  @action
  findQuake(id) {
    return QUAKESERVICE.getQuake(id).then(res => {
      if (res.length > 0) {
        this.quake = res.data;
      } else {
        Alert("No results match your criteria");
      }
    });
  }

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
