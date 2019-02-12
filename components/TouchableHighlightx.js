import React, { Component } from 'react'
import { Text, View, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default class TouchableHighlightx extends Component {
  _onPress = () => {
    alert(" This is onPress")
  }
  render() {
    return (
      <View style={{
        flex:1 , 
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TouchableHighlight
          underlayColor='red'
          onPress={this._onPress}
          onShowUnderlay={()=>{
            alert("onShowUnderlay button !")
          }}
          >
            <View style={{backgroundColor:'green'}}>
              <Text style={{padding:20,fontSize: 8, color:'white'}}>
                TouchableHighlightx
              </Text>
            </View>
        </TouchableHighlight>
        <TouchableWithoutFeedback
            onPress={this._onPress} bấm tổng thể cả (in) cả (out) 
            onLongPress={() => {
                alert(" This is onLongPress")
            }} bấm vào nút và dữ 1 lúc lâu lâu 
            onPressOut={() => {
                alert(" This is onPressOut")
            }} Tay đang chạm vào màn hình nhấp ra gọi là (onPressOut)
            onPressIn={() => {
                alert(" This is onPressIn")
            }} Nhấn chuột xuống và dữ gọi là (onPressIn)
        >
            <View style={{backgroundColor:'red'}}>
                  <Text style={{padding:20,fontSize: 8, color:'white'}}>
                     TouchableWithoutFeedback là  k phản ứng gì 
                  </Text>
                </View>
        </TouchableWithoutFeedback> 
      </View>
    )
  }
}