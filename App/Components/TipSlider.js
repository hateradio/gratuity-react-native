import React, { Component } from 'react';
import { AppRegistry, Text, View, Slider } from 'react-native';

export default class TipSlider extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.value || 15 }
    }

    onValueChange(value) {
        this.setState({ value: Math.round(value) })
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center'
            }}>
                <Slider
                    value={this.state.value}
                    maximumValue={50}
                    minimumValue={0}
                    style={{ flex: 4 }}
                    onValueChange={num => this.onValueChange(num)}
                ></Slider>
                <Text
                    style={{ flex: 1, fontSize: 24, paddingHorizontal: 5 }}
                >{this.state.value}%</Text>
            </View>
        )
    }
}


