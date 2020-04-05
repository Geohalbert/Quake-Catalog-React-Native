import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { inject, observer } from "mobx-react";
import { Navigation } from "react-native-navigation";
import LinearGradient from "react-native-linear-gradient";
import Button from "../theme/ButtonView";
import { Images } from "../../styles/theme";
import styles from "../../styles/routes/HomeViewStyles";

@inject("appState")
@observer
class HomeView extends Component {
  static options() {
    return {
      _statusBar: {
        backgroundColor: "transparent",
        style: "dark",
        drawBehind: true
      },
      topBar: {
        title: {
          text: "Home"
        },
        largeTitle: {
          visible: true
        },
        drawBehind: true,
        visible: true,
        animate: true
      }
    };
  }

  render() {
    return (
      <View style={styles.bar}>
        <LinearGradient
          colors={["#fac0fa", "#ffdea6", "#b9ecaf"]}
          locations={[0.15, 0.48, 1]}
          style={styles.root}
        >
          <Image source={Images.logo} />
          <Button title="Register" onPress={this.onClickPush("App.Register")} />
          <Button title="Login" onPress={this.onClickPush("App.Login")} />

          <Button title="Query" onPress={this.onClickPush("App.Query")} />
          <Text
            style={styles.footer}
          >{`this.props.componentId = ${this.props.componentId}`}</Text>
          {this.props.text ? (
            <Text style={styles.footer}>{this.props.text}</Text>
          ) : (
            false
          )}
        </LinearGradient>
      </View>
    );
  }

  onClickPush = link => async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: link
      }
    });
  };
}

export default HomeView;
