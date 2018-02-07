import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Estimate extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                alignContent: 'center',
            }}>
                <Text>{this.props.name}</Text>
                <Text style={{ fontSize: 22, alignSelf: 'center' }}>{this.props.value}</Text>
            </View>
        )
    }
}