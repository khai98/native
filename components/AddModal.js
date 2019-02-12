import React, { Component } from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData'

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem : '',
      newItemDescription : ''
    }
    
  }
  showAddModal = () => {
    if(this.refs.myModal) {
      this.refs.myModal.open();
    }
  }
  // install  (yarn add random-string )random-string de no render ra 1 key 
  generatekey = (numberOfCharacters) => {
    return require('random-string')({length: numberOfCharacters});
  }
  render() {
    return (
      <Modal 
        //  fel= ten tham chieu | kieu nhu bien
        //  tao 1 ten bien cho component modal
        ref={"myModal"}
        style={Css.Modal}
      // la cho cai modal o giua
        position='center'
        backdrop={true}
      // khi bam ngoai cai modal thi no se goi ham onClosed
      // onClosed={()=>{
      //     alert("Model CLose");
      // }}
      >
        <Text style={Css.Text}> New Item Information </Text>
        <TextInput style={Css.TextInput}
            onChangeText={(text) => this.setState({newItem: text})}
            value={this.state.newItem}
            placeholder="Enter new item"
        />
        <TextInput style={Css.TextInput}
            onChangeText={(text) => this.setState({newItemDescription: text})}
            value={this.state.newItemDescription}
            placeholder="Enter new Description"
        />
        <Button containerStyle={{
          padding: 8,
          marginLeft: 70,
          marginRight:70,
          height: 40,
          borderRadius:6,
          marginBottom: 8,
          backgroundColor:'#5fbf00'
          }}
          style={Css.Button}
          onPress={() => {
            if (this.state.newItem.length == 0 || this.state.newItemDescription.length == 0) {
              alert("You must write newItem and Description");
              return;
            }
            const newKey = this.generatekey(24);
            const newDescription = {
              key: newKey,
              name: this.state.newItem,
              Description: this.state.newItemDescription,
              imageUrl: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg"
            };
            flatListData.push(newDescription);
            this.props.parentFlatList.refreshFlatList(newKey);
            this.refs.myModal.close();
          }}>
          Save
        </Button>
      </Modal>
    )
  }
}

const Css = StyleSheet.create({
  Modal: {
    justifyContent: 'center',
    // borderRadius la bo tron
    borderRadius: 10,
    // bong do shodowRadius
    shadowRadius: 10,
    width:280,
    height:230
  },
  Text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginTop: 0,
  },
  TextInput: {
    height:40,
    borderBottomColor: 'gray',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  Button: {
    fontSize: 18,
    color: 'white'
  }
})