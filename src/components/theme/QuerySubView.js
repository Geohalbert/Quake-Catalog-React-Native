import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";
import { inject, observer } from "mobx-react";
import styles from "../../styles/routes/LoginViewStyles";
import DebouncedTouchableOpacity from "./DebouncedTouchableOpacity";
import LoaderView from "./LoaderView";

@inject("appState")
@observer
export default class QuerySubView extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Query View</Text>
      </View>
    );
  }
}
