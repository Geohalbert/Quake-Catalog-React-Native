import { observable } from "mobx";

export default class QuakeList {
  @observable mag;
  @observable place;
  @observable time;
  @observable ids;
  @observable coordinates;

  constructor(obj) {
    this.mag = obj.properties.mag || "";
    this.place = obj.properties.place || "";
    this.time = obj.properties.time || "";
    this.ids = obj.properties.ids || "";
    this.coordinates = obj.properties.geometry.coordinates || [];
  }
}
