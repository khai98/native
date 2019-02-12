import React, {Component} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedEmail: '',
      typedPhone: '',
      typedDescription: ''
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      this.setState(() => {
        return {typedPhone: 'Keyboard is show'}
      })
    })
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      this.setState(() => {
        return {typedPhone: 'Keyboard Hide'}
      })
    })
  };

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{marginTop: 50}}>
          <Text style={{marginTop: 5, marginLeft: 20,}}>Phone</Text>
          <TextInput
            style={{
              height: 40,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
              padding: 5,
              borderColor: 'gray',
              borderWidth: 1,

            }}
            keyboardType='numbers-and-punctuation'
            placeholder='Enter Phone'
            returnKeyType='done' // chuyen doi nut return tren keybroad thanh nut done 
            onSubmitEditing={Keyboard.dismiss} //them cai nay vao no moi chuyen vao nut done | nho them keyboard tren import component react native 
            placeholderTextColor='red'
            onChangeText={
              (Text) => {
                this.setState(
                  () => {
                    return {
                      typedPhone: Text
                    }
                  }
                )
              }
            }
          />
          <Text style={{marginTop: 5, marginLeft: 20,}}>Email</Text>
          <TextInput
            style={{
              height: 40,
              marginTop: 5,
              marginLeft: 20,
              marginRight: 20,
              padding: 5,
              borderColor: 'gray',
              borderWidth: 1,

            }}
            keyboardType='email-address'
            placeholder='Enter Email'
            placeholderTextColor='red'
            returnKeyType='done' // chuyen doi nut return tren keybroad thanh nut done 
            onSubmitEditing={Keyboard.dismiss} //them cai nay vao no moi chuyen vao nut done | nho them keyboard tren import component react native 
            onChangeText={
              (Text) => {
                this.setState(
                  () => {
                    return {
                      typedEmail: Text
                    }
                  }
                )
              }
            }
          />
          <TextInput
            style={{
              height: 100,
              margin: 20,
              padding: 5,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            placeholder='Description'
            placeholderTextColor='red'
            multiline={true} //gõ nhiều dòng
            editable={true} //có thể sủa text trong ô input kiểu bình luận
            autoFocus={true} // khi load ô input thêm cái này ở đâu thì nó sẽ nhảy vào đó trước
            returnKeyType='done' // chuyen doi nut return tren keybroad thanh nut done
            onSubmitEditing={Keyboard.dismiss} //them cai nay vao no moi chuyen vao nut done | nho them keyboard tren import component react native
            onChangeText={
              (Text) => {
                this.setState(
                  () => {
                    return {
                      typedDescription: Text
                    }
                  }
                )
              }
            }
          ></TextInput>

          <Text style={{marginLeft: 20, marginTop: 10}}>{this.state.typedPhone}</Text>
          <Text style={{marginLeft: 20, marginTop: 10}}>{this.state.typedEmail}</Text>
          <Text style={{marginLeft: 20, marginTop: 10}}>{this.state.typedDescription}</Text>
        </View>
      </View>
    );
  }
}
