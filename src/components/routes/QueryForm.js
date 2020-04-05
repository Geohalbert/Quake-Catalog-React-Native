import React, { Component } from "react";
import { View } from "react-native";
import { inject, observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import styles from "../../styles/routes/LoginViewStyles";
import Theme from "../../styles/theme";
import QuerySubView from "../theme/QuerySubView";

@inject("user")
@inject("quake")
@observer
class QueryForm extends Component {
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
      loading: false,
      quakes: []
    };
  }
  submitQuery = str => {
    this.setState({ loading: true });
    this.props.quake.query(str).then(() => {
      this.setState({ loading: false });
      Navigation.push(this.props.componentId, {
        component: {
          name: "App.QueryResults"
        }
      });
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
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <QuerySubView
          logout={this.logout}
          submitQuery={this.submitQuery}
          loading={this.state.loading}
        />
      </View>
    );
  }
}

export default QueryForm;