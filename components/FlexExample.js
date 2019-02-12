import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class FlexExample extends Component {
  render() {
    return (
      <View style={{height: 400}}>
        <View style={{flex: 1, flexDirection: 'row', margin: 50}}>
          <Text style={{width: 50, height: 30, backgroundColor: 'red', marginRight: 5}}> A </Text>
          <Text style={{width: 50, height: 30, backgroundColor: 'green', marginRight: 5}}> B </Text>
          <Text style={{width: 50, height: 30, backgroundColor: 'blue', marginRight: 5}}> C </Text>
          <Text style={{width: 50, height: 30, backgroundColor: 'yellow', marginRight: 5}}> D </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column', margin: 50}}>
          <Text style={{width: 50, height: 30, backgroundColor: 'red', marginBottom: 5}}> A </Text>
          <Text style={{width: 50, height: 30, backgroundColor: 'green', marginBottom: 5}}> B </Text>
          <Text style={{width: 50, height: 30, backgroundColor: 'blue', marginBottom: 5}}> C </Text>
          <Text style={{width: 50, height: 30, backgroundColor: 'yellow', marginBottom: 5}}> D </Text>
        </View>
      </View>

    )
  }
}