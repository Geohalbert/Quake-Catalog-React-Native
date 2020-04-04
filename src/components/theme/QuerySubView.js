import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";
import { inject, observer } from "mobx-react";
import styles from "../../styles/routes/LoginViewStyles";
import DebouncedTouchableOpacity from "./DebouncedTouchableOpacity";
import LoaderView from "./LoaderView";

@inject("quake")
@observer
class QuerySubView extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      starttime: new Date().setDate(new Date().getDate() - 1),
      endtime: new Date(),
      minmagnitude: null,
      maxmagnitude: null,
      minlatitude: null,
      maxlatitude: null,
      minlongitude: null,
      maxlongitude: null,
      maxdepth: null,
      mindepth: null,
      orderby: "time",
      limit: 10,
      quakes: []
    };

    this.baseState = this.state;
  }

  queryString = () => {
    let state = this.state;
    this.setState({ loading: true });
    let start = `&starttime=${this.convert(state.starttime)}`;
    let end = `&endtime=${this.convert(state.endtime)}`;
    let params = [start, end];
    let ignore = ["starttime", "endtime", "quakes", "loading"];
    Object.keys(state).forEach((key, index) => {
      if (state[key] != null && !ignore.includes(key)) {
        params.push(`&${key}=${state[key]}`);
      }
    });
    return params.join("");
  };

  convert = str => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  resetParams = () => {
    this.setState(this.baseState);
  };

  onSubmit = async () => {
    const qStr = await this.queryString;
    this.props.submitQuery(qStr);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Min Mag</Text>
        <View style={styles.inputWrap}>
          <TextInput
            ref="minmagnitude"
            placeholder="5"
            keyboard="numeric"
            style={styles.input}
            onChangeText={text => this.setState({ minmagnitude: text })}
            returnKeyType="next"
            value={this.state.minmagnitude}
            // onSubmitEditing={() => {}}
          />
        </View>
        <Text style={styles.inputTitle}>Max Mag</Text>
        <View style={styles.inputWrap}>
          <TextInput
            ref="maxmagnitude"
            placeholder="5"
            keyboard="numeric"
            style={styles.input}
            onChangeText={text => this.setState({ maxmagnitude: text })}
            returnKeyType="next"
            value={this.state.maxmagnitude}
            //onSubmitEditing={() => {}}
          />
        </View>
        <View style={styles.centerItems}>
          {this.props.loading ? (
            <LoaderView />
          ) : (
            <View>
              <DebouncedTouchableOpacity
                style={styles.submitButton}
                onPress={() => this.onSubmit}
              >
                <Text>SUBMIT</Text>
              </DebouncedTouchableOpacity>
              <DebouncedTouchableOpacity
                style={styles.submitButton}
                onPress={() => this.props.logout()}
              >
                <Text>Logout</Text>
              </DebouncedTouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default QuerySubView;
