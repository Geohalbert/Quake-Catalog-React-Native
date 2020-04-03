import { observable, action } from "mobx";
import LocalStorage from "../utils/LocalStorage";
import { Navigation } from "react-native-navigation";

class AppState {
  @observable root = "Home";

  constructor() {
    LocalStorage.getItem("user").then(res => {
      this.newRoot(res ? "Query" : "Home");
    });
  }

  @action
  newRoot(root) {
    Navigation.setRoot({
      root: {
        stack: {
          id: "App",
          children: [
            {
              component: {
                name: `App.${root}`
              }
            }
          ]
        }
      }
    });
  }
}

export default new AppState();
