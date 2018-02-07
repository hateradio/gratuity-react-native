import React, { Component } from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

export default class TipSlider extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Slider
                    value={this.props.tip}
                    maximumValue={50}
                    minimumValue={0}
                    style={styles.slider}
                    onValueChange={num => this.props.onValueChange(num)}
                ></Slider>
                <Text style={styles.percentage}>{this.props.tip}%</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center'
    },
    slider: {
        flex: 4
    },
    percentage: {
        flex: 1,
        fontSize: 22,
        paddingHorizontal: 5
    }
});
