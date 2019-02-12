import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList ,Image, Alert, TouchableHighlight , RefreshControl} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal'
import { getFoodFromServer } from '../networking/Server'

//  FlatList trong react native hiển thị danh sach | chỉ render các phần tử mình nhìn thấythấy | hiển thị danh sách các trường dữ liệu giống nhau.
//  Class này giống như 1 component nhưng không public chỉ sử dụng trong file này dùng thì gọi nó vào.
//  muốn hiển thị dữ liệu thì dùng this.props.item(key). trường muốn lấy 
//  yarn add react-native-swipeout de cai vao  |tac dung cua no  vuot tu phai sang trai de keo tu trai sang phai de tat 

class BasicFlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
      numberOfRresh: 0
    };
    console.log(`imgae`,props.item.imageUrl)
  }
  refreshFlatListItem = () => {
    this.setState((prevState) => {
      return {
        numberOfRresh: prevState.numberOfRresh +1
      };
    });
  }
  render() {
    const SwipeoutSttings = {
      autoClose: true,
      // keo tu trai sang phai la onClose
      onClose: (secId , rowId, direction) => {
        if(this.state.activeRowKey !== null) {
          this.setState({ activeRowKey: null });
        }
      },
      // keo tu phai sang trai la onOpen
      onOpen: (secId , rowId, direction) => {
        this.setState({ activeRowKey: this.props.item.key});
      },
      right: [
      {
        onPress: () => {
          // alert('edit')
          this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
        },
        //  kieu primary co mau xanh da troi
        text: 'Edit' , type: 'primary'
      },
      { 
        onPress: () => {
          const deletingRow = this.state.activeRowKey
          Alert.alert(
            'Alert',
            'Alert you sure want delete item',
            [
              {text: 'No', onPress: ()=> console.log('Cancel Pressed') , style: 'cancel'},
              {text: 'Yes' , onPress: ()=>{
                // dùng splice de xoa bo 1 phan tu tu vi tri muon xoa bo 
                flatListData.splice(this.props.index, 1);
                // Refresh Faltlist | sau khi xóa thì chuyên deletingRow đẻ set lại seta ở thằng cha 
                this.props.parentFlatList.refreshFlatList(deletingRow)
              }},
            ],
            {cancelable: true}
          );
        },
        text: 'Delete' , type: 'delete'
      }],
      rowId: this.props.index,
      sectionId: 1,
    }
    return (
      <Swipeout {...SwipeoutSttings}>
          <View style={{flex: 1 ,flexDirection: 'column'}}>
            <View style={{flex: 1 ,flexDirection: 'row',backgroundColor:'#cc6600'}}>
                <Image source={{uri: this.props.item.imageUrl}} style={Style.image}/>
                <View style={Style.ViewFlatListItem}>
                    <Text style={Style.FlatListItem}>{this.props.item.name}</Text>
                    <Text style={Style.FlatListItem}>{this.props.item.status.foodDescription}</Text>
                </View>
            </View>
          </View>
          <View style={{height:1 , backgroundColor: 'white'}}/>
      </Swipeout>
    )
  }
}

export default class  BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      deleteRowKey: null,
      // state foodsFromServer chu mang foods
      foodsFromServer: [],
      refreshing: false,
    });
  }
  // sau khi render thì hàm componentDidMount được chạy và gọi refreshDataFromServer()
  componentDidMount = () => {
    this.refreshDataFromServer();
  }

  refreshDataFromServer = () => {
    // refreshing : hien cai quay trong khi vao load du lieu thi set = true de no hien 
    this.setState({ refreshing: true })
    // .then() co nghia la khi nao co ket quả  từ api trả về  thì chui vào đây 
    getFoodFromServer().then((foods) => {
      this.setState({ foodsFromServer: foods });
      // sau khi load xong du lieu thi set = false de no k hien nua
      this.setState({ refreshing: false })
      // .catch là khi lấy dữ liệu bị lỗi thì bắn lỗi ra 
    }).catch((error) => {
      this.setState({ foodsFromServer: [] })
      this.setState({ refreshing: false })
    });
  }
  onRefresh = () => {
    this.refreshDataFromServer();
  }
  refreshFlatList = (activeKey) => {
    this.setState(()=>{
      return {
        deleteRowKey: activeKey
      }
    })
    // scrollToEnd khi add them 1 item moi dung cai scrollToEnd de khi add xong no tu nhay den cai vua add
    this.refs.myFlatList.scrollToEnd();
  }
  _onPressAdd = () => {
    // alert("you add item");
    if(this.refs.addModal) {
      this.refs.addModal.showAddModal();
    }
  }
  render() {
    // console.log(this.state.foodsFromServer)
    return (
      <View style={Style.div} >
        <View style={Style.add}>
          <TouchableHighlight
            style={{marginRight: 10}}
            onPress={this._onPressAdd}
          >
          <Image
              style={{width:35 , height: 35}}
              source={require('../image/plus.png')}
          />
          </TouchableHighlight>
        </View>
        <View style={{height:2 ,backgroundColor: 'white'}} />
        <FlatList ref={"myFlatList"}
        // data = {} truyền list data cần hiển thị vào 
            // data={flatListData}
            data={this.state.foodsFromServer}
        // (renderItem) kiểu giống hàm for  renderItem={ trong nó là 1 arrow function ( truyền 2 tham số "key" và "value" vào trong { dấu này }) => { trong này return về view cần hiển thị hoặc conlog.log trong này } }
        // Trong render kia truyền item, index nó chính là "key" và "valude" trong dữ liệu file json truyền ở data
            renderItem={({item,index})=>{
                console.log( 'item', item , 'index',index)
            return ( <BasicFlatListItem item = {item} index = {index} parentFlatList={this}/>);
        }}
        // them refreshControl = cai copomnent RefreshControl import vao 
         refreshControl={
           <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />
         }
        />
        {/* rel={'addModel} | cu phap rel={'ten bien'} la 1 cai ten bien tro luon den cai compoment addmodel nay */}
        <AddModal ref={'addModal'} parentFlatList={this}></AddModal>
        <EditModal ref={'editModal'} parentFlatList={this}></EditModal>
      </View>
    )
  }
}

const Style = StyleSheet.create({
  add: {
    backgroundColor: '#008ae6',
    height: 44,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  div: {
    flex: 1,
    marginTop: 32,
  },
  ViewFlatListItem: {
    flex: 1,
    flexDirection: 'column',
  },
  FlatListItem: {
    color: 'white',
    padding: 10,
    fontSize:16,
  },
  image:{
    width:90,
    height:90,
    margin:5,
  }
})