import React, {Component} from 'react'
import {Alert, View, Button} from 'react-native'

export default class ReactNativeButton extends Component {
  _onPressButton = () => {
    Alert.alert("Learn react native !")
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#808080'
      }}>
        <View style={{
          backgroundColor: '#32CD32',
          borderRadius: 5,
          shadowRadius: 10,
        }}>
          <Button
            onPress={this._onPressButton} // onPress xu li action khi nguoi dung bam . bam vao thi ham nay se xu li doan code ben trong 
            title="This is Button"
            color='white'
          >
          </Button>
        </View>
      </View>
    )
  }
}