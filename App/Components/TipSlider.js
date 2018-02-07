import React, { Component } from 'react';
import { AppRegistry, Text, View, Slider } from 'react-native';

export default class TipSlider extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center'
            }}>
                <Slider
                    value={this.props.tip}
                    maximumValue={50}
                    minimumValue={0}
                    style={{ flex: 4 }}
                    onValueChange={num => this.props.onValueChange(num)}
                ></Slider>
                <Text
                    style={{ flex: 1, fontSize: 24, paddingHorizontal: 5 }}
                >{this.props.tip}%</Text>
            </View>
        )
    }
}
