import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Lifecyle extends Component {
  // Vừa vào cái thì chạy cái này constructor B1.
  constructor(props) {
    super(props);
    console.log(`${Date.now()}.this is constructor`)
    this.state = {
      numberOfRefresh: 0
    };
    // hàm setInterval sẽ xử lí chạy seconds | set timeout sau khoảng bao nhiêu milliseconds muốn set thì hàm sẽ set lại state
    setInterval(() => {
      console.log(`${Date.now()}.Change state each 2 seconds`)
      this.setState(previousState => {
        return { numberOfRefresh: previousState.numberOfRefresh + 1 };
      })
    },20000);
  }
  // Cái hàm này chạy thứ 2 sau contructoc B2. sau đó => render function 
  componentWillMount() {
    console.log(`${Date.now()}.this is componentWillMount`)
  };
  // Cái hàm này được hạy t4 khi chạy xong componentWillMount và render function
  componentDidMount() {
    console.log(`${Math.floor(Date.now())}.this is componentDidMount`)
  };
  // Nếu như set = false thì 2 hàm componentWillUpdate và  componentDidUpdate không được gọi
  shouldComponentUpdate () {
    console.log(`${Date.now()}.this is shouldComponentUpdate`)
    return true;
  };
  // Cái hàm này chạy được sau shouldComponentUpdate sau đó chạy qua hàm render function 
  componentWillUpdate () {
    console.log(`${Date.now()}.this is componentWillUpdate`)
  };
  // Cái hàm này được chạy khi chạy shouldComponentUpdate và render function  xong thì chạy
  componentDidUpdate () {
    console.log(`${Date.now()}.this is componentDidUpdate`)
  };
  render() {
    console.log(`${Math.floor(Date.now())}.this is rernder function`)
    let textToDisplay = `number of refresh: ${this.state.numberOfRefresh}`;
    return (
      <View style={{flex: 1}}>
         <Text style={{marginTop: 100, color:'black',height: 50, width: 600, marginLeft: 30}}>{textToDisplay}</Text>
      </View>
    );
  }
}

export default class LifecyleComponent extends Component {  
  render() {
    var lifecyle = <Lifecyle></Lifecyle>;
    return (
      <View>
         {lifecyle}
      </View>
    );
  }
}
