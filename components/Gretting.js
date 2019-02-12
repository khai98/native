import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class MultipleGreeting extends Component {
  render() {
    return (
      <View
        style={Views.container}
      >
        <Gretting style={Views.text1} name=" This is frist"> </Gretting>
        <Gretting style={Views.text2} name=" This is a"> </Gretting>
        <Gretting style={Views.text3} name=" This is b"> </Gretting>
        <Gretting style={Views.text4} name=" This is c"> </Gretting>
      </View>
    );
  }
}

class Gretting extends Component {
  render( text = (
    <Text {...this.props}> {GrettingHello} </Text>
  )) {
    let GrettingHello = `
         Hello ${this.props.name}
        `;
    return text;
  }
}

const Views = StyleSheet.create({
  container: {
    marginTop: 100,
    margin: 30,
    borderWidth: 1,
    backgroundColor: '#25ea25',
  },
  text1: {
    margin: 5, color: 'white'
  },
  text2: {
    margin: 5, color: 'red'
  },
  text3: {
    margin: 5, color: 'black'
  },
  text4: {
    margin: 5, color: 'yellow'
  },
});