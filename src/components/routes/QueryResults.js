import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView
} from "react-native";
import firebase from "react-native-firebase";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import Theme from "../../styles/theme";
import ListItem from "../theme/ListItem";

@inject("quake")
@observer
class QueryResults extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: "Query Results"
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

  render() {
    const quakes = toJS(this.props.quake.quakes);
    const uid = firebase.auth().currentUser.uid;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {quakes.map((quake, index) => {
            return (
              <View style={styles.quake} key={index}>
                <ListItem quake={quake} index={index} />
              </View>
            );
          })}
        </ScrollView>
        <Button
          title="SAVE"
          onPress={() => this.props.quake.saveQuery({ quakes, uid })}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 5
  },
  quake: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20
  },
  text: {
    paddingHorizontal: 5
  }
});

export default QueryResults;
