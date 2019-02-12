import React, { Component } from 'react';
import { Text, View , SectionList , StyleSheet , Alert , Platform} from 'react-native';
import {SelectionListData} from '../data/SectionListItemData.js';

class SectionListItem extends Component {
  render() {
    return (
      <View style={{flex:1 , flexDirection: 'column', backgroundColor:'rgb(98,197,184)'}}>
          <Text style={{fontSize:16 , fontWeight: 'bold', color: 'rgb(173, 252 ,250)', marginLeft: 20 , marginRight: 20}}>
            {this.props.item.name}
          </Text>
          <Text style={{fontSize:16 , fontWeight: 'bold', color: 'rgb(173, 252 ,250)', marginLeft: 20 , marginRight: 20}}>
            {this.props.item.describe}
          </Text>
          <View style={{backgroundColor:'rgb(77,120,140)', height: 1, marginLeft: 20 , marginRight:20}}/>
      </View>
    );
  }
}
class SelectionHeader extends Component {
  render() {
    return (
      <View style={{flex:1 , backgroundColor: 'rgb(77,120,140)'}}>
        <Text style={{fontSize:16 ,fontWeight: 'bold',color: 'white',margin:20}}>{this.props.section.title}</Text>
      </View>
    );
  }
}

export default class BasiSelectionList extends Component {
  render() {
    // console.log(SelectionListData)
    return (
      <View style={{ flex:1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
        <SectionList
          renderItem={({ item , index }) => {
            // console.log(`item = ${JSON.stringify(item)} , index = ${index}`)
            return (
              <SectionListItem item={item} index={index} />
            );
          }}
          renderSectionHeader={({ section }) => {
            return(
              <SelectionHeader section={section}/>
            );
          }}
          // 
          sections={SelectionListData}
          // keyExtractor la 1 function tu dong tao ra list cac key 
          keyExtractor={(item , index) => item.name }
        >
        </SectionList>
      </View>
    )
  }
}
