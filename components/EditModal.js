import React, { Component } from 'react';
import { Text,StyleSheet,TextInput} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData'

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editItem : '',
      editItemDescription : '',
     
    }
  }
  //  showEditModel có 2 đối tượg tuyền vào 1 là cái flastlistItem là cái danh sách , 2 là ojecbt chứa flastlistItem
  showEditModal = (editingItem, flastlistItem ) => {
    console.log(`editingItem = ${JSON.stringify(editingItem)}`);
    this.setState({
      key: editingItem.key,
      editItem: editingItem.name,
      editItemDescription: editingItem.Description,
      flastlistItem: flastlistItem,
    })

    this.refs.myModal.open();
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
        <Text style={Css.Text}> New Item Information</Text>
        <TextInput style={Css.TextInput}
            onChangeText={(text) => this.setState({editItem: text})}
            value={this.state.editItem}
            placeholder="Enter new item"
        />
        <TextInput style={Css.TextInput}
            onChangeText={(text) => this.setState({editItemDescription: text})}
            value={this.state.editItemDescription}
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
            if (this.state.editItem.length == 0 || this.state.editItemDescription.length == 0) {
              alert("You must write editItem and editDescription");
              return;
            }
            // tạo 1 biến foundIndex   = cái data json mẫu  trong cái findindex() se la  1 cai arout function . = cái state key so sanh voi cái key trong data json mau
            var foundIndex = flatListData.findIndex(item => this.state.key === item.key);
            if (foundIndex < 0) {
              return; 
            }
            flatListData[foundIndex].name = this.state.editItem;
            flatListData[foundIndex].Description = this.state.editItemDescription;
            // refresh lastlist item 
            this.state.flastlistItem.refreshFlatListItem();
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