import React, { Component } from "react";
import { View } from "react-native";
import { inject, observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import styles from "../../styles/routes/LoginViewStyles";
import LoginSubView from "../theme/LoginSubView";
import Theme from "../../styles/theme";

@inject("user")
@inject("appState")
@observer
class LoginView extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: "Login"
        },
        backButton: {
          color: Theme.linkColor
        }
      }
    };
  }

  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  onClickPush = link => async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: link
      }
    });
  };

  onSubmit = (username, password) => {
    this.setState({ loading: true });
    this.props.user.login(username, password).then(() => {
      this.setState({ loading: false });
      Navigation.setRoot({
        root: {
          stack: {
            id: "App",
            children: [
              {
                component: {
                  name: `App.Query`
                }
              }
            ]
          }
        }
      });
      Navigation.pop(this.props.componentId);
    });
  };

  logout = () => {
    this.setState({ loading: true });
    this.props.user.logout().then(() => {
      this.setState({ loading: false });
      Navigation.setRoot({
        root: {
          stack: {
            id: "App",
            children: [
              {
                component: {
                  name: `App.Home`
                }
              }
            ]
          }
        }
      });
      // Navigation.pop(this.props.componentId);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginSubView
          onSubmit={this.onSubmit}
          logout={this.logout}
          loading={this.state.loading}
        />
      </View>
    );
  }
}

export default LoginView;
