import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class Justifycontent extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#DCDCDC'
      }}>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            margin: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#708090',
            // justifyContent: 'center'
            // justifyContent: 'space-around' dau va dich moi dua 1 nua
            // justifyContent: 'space-between' cach deu giua cac phan tu
            // justifyContent: 'flex-end', dich chuyen tu duoi len
            // justifyContent: 'flex-start' dich chuyen tu tren xuong
          }}>
          <Text style={{width: 50, height: 30, backgroundColor: '#32CD32', marginRight: 5}}> A </Text>
          <Text style={{width: 50, height: 30, backgroundColor: '#8B0000', marginRight: 5}}> B </Text>
          <Text style={{width: 50, height: 30, backgroundColor: '#BA55D3', marginRight: 5}}> C </Text>
          <Text style={{width: 50, height: 30, backgroundColor: 'yellow', marginRight: 5}}> D </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            margin: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#20B2AA',
            // justifyContent: 'center'
            // justifyContent: 'space-around' dau va dich moi dua 1 nua
            // justifyContent: 'space-between' cach deu giua cac phan tu
            // justifyContent: 'flex-end', dich chuyen tu duoi len
            // justifyContent: 'flex-start' dich chuyen tu tren xuong
          }}>
          <Text style={{width: 50, height: 30, backgroundColor: '#32CD32', marginBottom: 5}}> A </Text>
          <Text style={{width: 50, height: 30, backgroundColor: '#8B0000', marginBottom: 5}}> B </Text>
          <Text style={{width: 50, height: 30, backgroundColor: '#BA55D3', marginBottom: 5}}> C </Text>
          <Text style={{width: 50, height: 30, backgroundColor: 'yellow', marginBottom: 5}}> D </Text>
        </View>
      </View>
    )
  }
}