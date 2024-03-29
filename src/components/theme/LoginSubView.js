import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";
import { inject, observer } from "mobx-react";
import styles from "../../styles/routes/LoginViewStyles";
import DebouncedTouchableOpacity from "./DebouncedTouchableOpacity";
import LoaderView from "./LoaderView";

@inject("appState")
@observer
class LoginSubView extends Component {
  constructor() {
    super();
    this.state = {
      email: "geohalbert@gmail.com",
      password: "password"
    };
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Email</Text>
        <View style={styles.inputWrap}>
          <TextInput
            ref="email"
            placeholder="john@smith.com"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
            returnKeyType="next"
            value={this.state.email}
            onSubmitEditing={() => {
              this.refs.password.focus();
            }}
          />
        </View>
        <Text style={styles.inputTitle}>Password</Text>
        <View style={styles.inputWrap}>
          <TextInput
            ref="password"
            placeholder="••••••••"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => this.setState({ password: text })}
            returnKeyType="done"
            value={this.state.password}
            secureTextEntry={true}
            onSubmitEditing={() => {}}
          />
        </View>
        <View style={styles.centerItems}>
          {this.props.loading ? (
            <LoaderView />
          ) : (
            <View>
              <DebouncedTouchableOpacity
                style={styles.submitButton}
                onPress={() =>
                  this.props.onSubmit(this.state.email, this.state.password)
                }
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

export default LoginSubView;
