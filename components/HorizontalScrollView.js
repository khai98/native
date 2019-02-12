import React, { Component } from 'react'
import { View , StyleSheet , Text , TextInput , Dimensions, ScrollView , Image } from 'react-native'
// ScrollView kieu ngang 
export default class HorizontalScrollView extends Component {
  render() {
    return (
      <ScrollView
      // xét chiều ngang bằng true | minh co the keo sang ngang
       horizontal={true}
      // cho phép lật trang 
       pagingEnabled={true}
      // hiện thanh nhỏ ở dưới cho biết ta đang lật trang
       showsHorizontalScrollIndicator={true}
      //  Thêm 1 khoảng không vào thanh hiển thị ở dưới | scrollIndicatorInsets chỉ có tác dụng trên ios
       scrollIndicatorInsets={{top:10 , left :10 , right:10, bottom:10}} 
      //  hàm này được gọi khi ta ta bắt đầu scroll (kéo)
       onMomentumScrollBegin={()=> {
        //  alert('This is onMomentumScrollBegin')
       }}
      //  giống hàm onMomentumScrollBegi nhưng khi tay nhắc lên thì nó chạy hàm nèy nè
       onMomentumScrollEnd={()=>{
        // alert('This is onMomentumScrollEnd')
       }}
      //  khi đang vuốt qua vuốt lại thì nó sẽ gọi hàm onScroll | event truyen vao chinh la doi tuong tay ta bam vao
      onScroll={(event)=>{
        let logData = `Scroll to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`
        console.log(logData)
      }}
      // Cứ 10 mini s thì nó sẽ lấy toạ độ một lần | dua 1 khoang 1time bao lau thi no se update toa do mot lan
      scrollEventThrottle={10}
      >
          <View style={Views.div1}> 
            <Text style={Views.Text1}> Screen 01 </Text>
          </View>
          <View style={Views.div2}> 
            <Text style={Views.Text2}> Screen 02 </Text>
          </View>
          <View style={Views.div3}> 
            <Text style={Views.Text3}> Screen 03 </Text>
          </View>
      </ScrollView>
    )
  }
}

const sreenWidth = Dimensions.get('window').width;
// const sreenHeight = Dimensions.get('window').height;

const Views = StyleSheet.create({
    div1:{
      backgroundColor:'#56aaff',
      marginBottom: 40,
      flex :1,
      marginTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
      width: sreenWidth,
    },
    div2:{
      backgroundColor:'tomato',
      flex :1,
      marginBottom: 40,
      marginTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
      width: sreenWidth,
    },
    div3:{
      backgroundColor:'black',
      flex :1,
      marginBottom: 40,
      marginTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
      width: sreenWidth,
    },
    Text1 : {
      fontSize:20,
      paddingLeft: 20,
      padding: 15,
      color: 'white',
      textAlign :'center'
    },
    Text2 : {
      fontSize:20,
      paddingLeft: 20,
      padding: 15,
      color: 'white',
      textAlign :'center'
    },
    Text3 : {
      fontSize:20,
      paddingLeft: 20,
      padding: 15,
      color: 'white',
      textAlign :'center'
    }
})