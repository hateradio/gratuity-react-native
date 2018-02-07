import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tip from './App/Components/Tip'
import TipSlider from './App/Components/TipSlider'
import Estimate from './App/Components/Estimate'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 100 }
  }

  render() {
    return (
      <View style={styles.container}>
        <Tip _onChangeText={(text) => console.log(text)} value={`${this.state.value}`}></Tip>
        <TipSlider />

        <View style={{
          flexDirection: 'row',
          width: '80%',
          borderColor: '#eee', borderWidth: 1
        }}>

          <Estimate name="Gratuity" />
          <Estimate name="Total" />

        </View>
      </View>
    );
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
