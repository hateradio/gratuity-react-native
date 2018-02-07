import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Estimate extends Component {
    render() {
        let { value } = this.props

        value = !isNaN(+value) ? (+value).toFixed(2) : value
        return (
            <View style={styles.container}>
                <Text>{this.props.name}</Text>
                <Text style={styles.value}>{value}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
    },
    value: {
        fontSize: 24,
        alignSelf: 'center'
    }
});
