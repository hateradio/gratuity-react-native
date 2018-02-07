import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class BaseTotal extends Component {
  render() {
    return (
      <TextInput
        placeholder={'Your Total'}
        keyboardType={'numeric'}
        style={styles.TextInput}
        value={this.props.value}
        onChangeText={text => this.props.onChangeText(text)}
      />
    )
  }
}

const styles = StyleSheet.create({
  TextInput: {
    width: '100%',
    height: 60,
    borderColor: 'gray',
    borderWidth: 0,
    fontSize: 32,
    backgroundColor: '#fff'
  }
});
