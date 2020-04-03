import { observable, action, computed } from "mobx";
import { Alert } from "react-native";
import autobind from "autobind-decorator";
import LocalStorage from "../utils/LocalStorage";
import USERSERVICE from "../service/user.service";

@autobind
class UserStore {
  @observable _userId = "";

  @observable _user = {};

  @observable _loggedIn = false;

  constructor() {}

  @action
  register(username, password) {
    return USERSERVICE.createUserWithEmailAndPassword(username, password)
      .then(resp => {
        if (resp.user) {
          this.user = resp.user;
        }
      })
      .catch(e => {
        Alert.alert(e.message);
      });
  }

  @action
  login(username, password) {
    return USERSERVICE.signInWithEmailAndPassword(username, password)
      .then(resp => {
        if (resp.user) {
          this.user = resp.user;
          this.loggedIn = true;
          LocalStorage.setItem("user", resp.user);
        }
      })
      .catch(e => {
        Alert.alert(e.message);
      });
  }

  @action
  logout() {
    return USERSERVICE.signOut()
      .then(() => {
        this.user = {};
        this.loggedIn = false;
        LocalStorage.removeItem("user");
      })
      .catch(e => {
        Alert.alert(e.message);
      });
  }

  @computed
  get userId() {
    return this._userId === "" ? false : this._userId;
  }

  @computed
  get user() {
    return this._user || {};
  }

  set user(user) {
    this._user = user;
  }

  @computed
  get loggedIn() {
    return this._loggedIn || false;
  }

  set loggedIn(bool) {
    this._loggedIn = bool;
  }
}

export default new UserStore();
