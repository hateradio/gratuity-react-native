import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Estimate extends Component {

    constructor(props) {
        super(props)
        this.state = { value: props.value || '0.00' }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                alignContent: 'center',
            }}>
            <Text>{this.props.name}</Text>
            <Text style={{ fontSize: 22, alignSelf: 'center' }}>{this.state.value}</Text>
          </View>
        )
    }
}