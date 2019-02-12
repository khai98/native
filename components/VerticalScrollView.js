import React, { Component } from 'react'
import { Text,TextInput, Dimensions, ScrollView , Image } from 'react-native'
// ScrollView kiểu dọc | nhược điểm là nó sẽ render tất các component cùng 1 lúc 
export default class VerticalScrollView extends Component {
  render() {
    // Dismension.get('window') lay ra do rong cua man hinh
    let screenWith = Dimensions.get('window').width;
    return (
      // muốn hiển thi nhiều component con thi cho vao ScrollView minh co the keo xuong de hien het cac component nho ben trong ra man hinh gọi là scrollview
      <ScrollView
      //  ti le zoon lon nhat la 300
        maximumZoomScale={3} 
      //  ti le zoon nho nhat la 20%
        minimumZoomScale={0.2}
        // keo vao dia diem khac thi keyboard tut xuong
        keyboardDismissMode='on-drag'
      // style cho scrollview
        contentContainerStyle={{ paddingLeft:20 , paddingRight:20}}
      > 
          <Image
            style={{with: screenWith, height:screenWith * 400/400, marginTop: 20}}
            source={require('../image/xfinitymobile-logo.jpg')}
          ></Image>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              padding: 15,
              textAlign: 'center',
              backgroundColor: 'green'
            }}>
              This is Text
          </Text>
          <TextInput
            style={{padding:10 , margin: 10 , borderWidth: 1}}
            placeholder="Enter "
          >
          </TextInput>
          <Text
           style={{
             fontSize:20,
             padding: 15,
             color:'white',
             textAlign: 'center'
           }}
          >
          This is Text
          </Text>
          <Image
            style={{with: screenWith, height:screenWith * 400/400, marginTop: 20}}
            source={require('../image/xfinitymobile-logo.jpg')}
          ></Image>
          <Image
            style={{with: screenWith, height:screenWith * 400/400, marginTop: 20}}
            source={require('../image/xfinitymobile-logo.jpg')}
          ></Image>
          <Image
            style={{with: screenWith, height:screenWith * 400/400, marginTop: 20}}
            source={require('../image/xfinitymobile-logo.jpg')}
          ></Image>
          <Image
            style={{with: screenWith, height:screenWith * 400/400, marginTop: 20}}
            source={require('../image/xfinitymobile-logo.jpg')}
          ></Image>
          <Image
            style={{with: screenWith, height:screenWith * 400/400, marginTop: 20}}
            source={require('../image/xfinitymobile-logo.jpg')}
          ></Image>
      </ScrollView>
    )
  }
}