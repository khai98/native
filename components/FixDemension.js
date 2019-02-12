import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FixDemension extends Component {
  render() {
    return (
      <View >
         <Text style = {{ width:150 , height:50 , backgroundColor:  'blue'}}> textInComponent </Text>
         <Text style = {{ width:170 , height:70 , backgroundColor:  'red'}}> textInComponent </Text>
         <Text style = {{ width:180 , height:90 , backgroundColor:  '#ff7f00'}}> textInComponent </Text>
         <Text style = {{ width:190 , height:120 , backgroundColor: '#4c4c4c'}}> textInComponent </Text>
         <Text style = {{ width:130 , height:150 , backgroundColor: '#0000ff'}}> textInComponent </Text>
      </View>
    )
  }
}