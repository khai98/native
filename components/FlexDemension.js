import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FlexDemension extends Component {
  render() {
    return (
      <View style = { { flex: 1} }>
       <Text style = {{ flex:50 , backgroundColor: '#0000ff'}}> textInComponent </Text>
       <Text style = {{ flex:50 , backgroundColor: 'red'}}> textInComponent </Text>
      </View>
    )
  }
}