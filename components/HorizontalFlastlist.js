import React, { Component } from 'react';
import { View, Text, StyleSheet ,FlatList, Image , ImageBackground, Alert, Platform, TouchableHighlight } from 'react-native';
import {HorizontalFlastlistData} from '../data/HorizontalFlastlistData';
import Icon from 'react-native-vector-icons/Ionicons';

class HorizontalFlastlistItem extends Component {
  render() {
    return (
      <View style={_CSS.ViewHorizontalFlastlistItem}>
           <Icon size={30} color='white'/>
          <Text style={_CSS.ViewHorizontalFlastlistItemChildren}> 
            {this.props.item.hour}
           </Text>
           <Icon size={30} color='white'/>
          <Text style={_CSS.ViewHorizontalFlastlistItemChildren}>
            {this.props.item.degreess}
          </Text>
           <Icon size={30} color='white'/>
          <Text style={_CSS.ViewHorizontalFlastlistItemChildren}>
            {this.props.item.status.ios}
          </Text>
      </View>
    )
  }
}

export default class HorizontalFlastlist extends Component {
  render() {
    return (
      <View style={_CSS.ViewParent}> 
          <View style={_CSS.ViewChildren}>
              <View style={_CSS.ViewImage}>
              </View>
              <Text style={_CSS.Weatherforecas}>
                Weather forecas
              </Text>
              <FlatList style={_CSS.FlastList}
              // horizontal  = true co the vuot ngang duoc
                horizontal={true}
                data={HorizontalFlastlistData}
                renderItem={({item, index}) => {
                  console.log(`item = ${JSON.stringify(item)} , index = ${index}`)
                  return (<HorizontalFlastlistItem item={item} index={index} parentFlastlist={this}/>)
                }}
              />
          </View>
      </View>
    );
  }
}

const _CSS = StyleSheet.create ({
  ViewParent: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Platform.OS === 'ios' ? 34 : 0 ,
  },
  ViewChildren: {
    height: 150
  },
  FlastList: {
    backgroundColor: 'black',
    opacity: 0.5,
  },
  ViewHorizontalFlastlistItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 4,
  },
  ViewHorizontalFlastlistItemChildren: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
  },
  Weatherforecas:{
    fontSize: 16 ,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: "transparent",
    margin: 10,
  },
  ViewImage: {

  }
})