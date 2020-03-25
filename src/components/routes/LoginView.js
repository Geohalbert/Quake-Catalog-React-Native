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
export default class LoginView extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Login',
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
    // eslint-disable-next-line react/prop-types
    this.props.user.login(username, password).then(() => {
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
