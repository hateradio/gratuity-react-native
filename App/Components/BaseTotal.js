import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class BaseTotal extends Component {
  render() {
    return (
      <TextInput
        placeholder={"Your Total"}
        keyboardType={'numeric'}
        style={{ width: '100%', height: 40, borderColor: 'gray', borderWidth: 2 }}
        value={this.props.value}
        onChangeText={text => this.props.onChangeText(text)}
      />
    )
  }
}
