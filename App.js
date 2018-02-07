import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseTotal from './App/Components/BaseTotal'
import TipSlider from './App/Components/TipSlider'
import Estimate from './App/Components/Estimate'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseTotal: 100,
      calculatedGratuity: 0,
      calculatedTotal: 0,
      tipAmount: 15
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <BaseTotal onChangeText={this.onInput} value={`${this.state.baseTotal}`}></BaseTotal>
        <TipSlider onValueChange={this.onSlider} tip={this.state.tipAmount} />

        <View style={{
          flexDirection: 'row',
          width: '80%',
          borderColor: '#eee', borderWidth: 1
        }}>

          <Estimate name="Gratuity" value={this.state.calculatedGratuity} />
          <Estimate name="Total" value={this.state.calculatedTotal} />

        </View>
      </View>
    );
  }

  static round(num) {
    return Math.round(num * 100) / 100
  }

  calculate() {
    const { baseTotal, tipAmount } = this.state;
    const money = (+baseTotal)

    console.log(baseTotal, money, tipAmount, money)

    if (isNaN(money)) {
      return;
    }

    calculatedGratuity = App.round(money * (tipAmount * 0.01))
    calculatedTotal = App.round(money + calculatedGratuity)

    console.log(baseTotal, tipAmount, calculatedGratuity)

    this.setState({
      calculatedGratuity,
      calculatedTotal
    })
  }

  onInput = baseTotal => {
    this.setState({ baseTotal }, this.calculate.bind(this))
  }

  onSlider = tip => {
    this.setState({ tipAmount: Math.round(tip) }, this.calculate.bind(this))
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
