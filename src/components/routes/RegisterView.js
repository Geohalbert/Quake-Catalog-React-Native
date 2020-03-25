import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { Navigation } from 'react-native-navigation';
import styles from '../../styles/routes/LoginViewStyles';
import LoginSubView from '../theme/LoginSubView';

@inject('user')
@observer
export default class Register extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Register',
        },
      }
    };
  }

  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  onSubmit = (username, password) => {
    this.setState({ loading: true });
    this.props.user.register(username, password).then(() => {
      this.setState({ loading: false });
      Navigation.pop(this.props.componentId);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginSubView onSubmit={this.onSubmit} loading={this.state.loading} />
      </View>
    );
  }
}
