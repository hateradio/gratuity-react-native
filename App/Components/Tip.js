import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class Tip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        placeholder={"Your Total"}
        style={{width: '100%', height: 40, borderColor: 'gray', borderWidth: 3}}
        onChangeText={(text) => this.props._onChangeText(text)}
        value={this.props.value}
      />
    );
  }
}
