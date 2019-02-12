import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class native extends Component {
  render() {
    let HellWorld = `
	 
		This is hello world `;
    return (
      <View>
        <Text> {HellWorld} </Text>
        <Image
          style={{width: 318, height: 200, margin: 30}}
          source={{uri: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/10439349/twd_videogamer.jpg"}}
        />
      </View>
    );
  }
}