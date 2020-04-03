import React, { Component } from "react";
import { Text, View } from "react-native";
import { inject, observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import styles from "../../styles/routes/LoginViewStyles";
import Theme from "../../styles/theme";
import LoginSubView from "../theme/LoginSubView";

@inject("user")
@observer
class QueryView extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: "Query"
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
        <Text>Query</Text>

        <LoginSubView
          onSubmit={this.onSubmit}
          logout={this.logout}
          loading={this.state.loading}
        />
      </View>
    );
  }
}

export default QueryView;