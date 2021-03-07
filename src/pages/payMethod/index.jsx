import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import  api from "../../services/api";
import { base }from "../../services/config";
import { View, Picker } from '@tarojs/components'
import { AtInput,AtTextarea,AtDrawer,AtButton,AtList, AtListItem,AtIcon,AtImagePicker,AtRadio,AtToast,AtActionSheet, AtActionSheetItem,AtInputNumber,AtModal, AtModalHeader, AtModalContent, AtModalAction} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/textarea.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/image-picker.scss";
import "taro-ui/dist/style/components/radio.scss";
import "taro-ui/dist/style/components/drawer.scss";
import "taro-ui/dist/style/components/toast.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/action-sheet.scss";
import "taro-ui/dist/style/components/input-number.scss";
import "taro-ui/dist/style/components/modal.scss";
import '../addGood/index.less';

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      files: [],
      thumbs:[],
      otherPayMethods:false,
      accountName:'',
      bsb:'',
      showUploadBtn:true,
      groupPrice:null,
      transferStatus:false,
      QRcodeStatus:false,
      unitPanel:false,
      warning:false,
      warningText:'',
      Submited:false,
    }
  }
  componentDidMount(){
  }
  componentDidShow(){
  }

  onImageChange(files) {
    console.log(files,'files');
    this.setState({
      files
    })
    if(files.length===8){
      this.setState({
        showUploadBtn:false
      })
    }else{
      this.setState({
        showUploadBtn:true
      })
    }
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }
  onImageUpload=(files,callback)=>{

    let thumbArray =[],_this = this;
    let existFiles = _this.state.thumbs;
    let newFiles = files.filter((file)=>{
      return file.file !== undefined
    })
    console.log(files,newFiles,'files');
    if(newFiles.length > 0){
      for(let i = 0;i<newFiles.length;i++){
        wx.compressImage({
          src: newFiles[i].url, // picture path
          quality: 50, // compress quality
          success: res =>{
            Taro.uploadFile({
              url: 'http://192.168.0.102:3000/upload/uploadFile',
              filePath: res.tempFilePath,
              header:{
                'content-type': 'multipart/form-data',
              },
              name: 'file',
              success: function (res){
                let dataObj = JSON.parse(res.data)
                // collect pictures
                thumbArray.push(dataObj);
                // callback
                callback(thumbArray.concat(existFiles),_this);
              }
            })
          }
        })
      }
    }else{
      // when user remove one of the exist file
      let existFilesId = files.map((file)=>{
          return file.id
      })
      // filter and get new exist files
      let newExistFiles = existFiles.filter((file)=>{
          return existFilesId.indexOf(file.id) !== -1;
      })
      callback(newExistFiles,_this);
    }
  }
  QRcodeStatusChange = e =>{
    this.setState({
      QRcodeStatus: e.detail.value,
    })
  }
  transferStatusChange = e =>{
    this.setState({
      transferStatus: e.detail.value,
    })
  }
  handleAccountNameChange = value =>{
    this.setState({
      accountName:value
    })
  }
  handleBSBChange = value =>{
    this.setState({
      bsb:value
    })
  }
  handleAccountNumChange = value =>{
    this.setState({
      accountNum:value
    })
 }
  otherPayMethodsChange =(value)=>{
    this.setState({
      otherPayMethods:value.detail.value
    })
  }
  render () {
    let { QRcodeStatus,transferStatus,showUploadBtn } =this.state
    let transferAccount = null, QRcodeMethods = null;
    if (transferStatus){
      transferAccount = <View> <AtInput
        name='accountName'
        title='Account Name'
        type='text'
        placeholder='请输入Account Name'
        value={this.state.accountName}
        onChange={this.handleAccountNameChange.bind(this)}
      />
      <AtInput
        name='bsb'
        title='BSB'
        type='digit'
        placeholder='请输入BSB'
        value={this.state.bsb}
        onChange={this.handleBSBChange.bind(this)}
      />
      <AtInput
        name='accountNum'
        title='Account Number'
        type='digit'
        placeholder='请输入Account Number'
        value={this.state.accountNum}
        onChange={this.handleAccountNumChange.bind(this)}
      />
      </View>
    }
    if(QRcodeStatus){
      QRcodeMethods = <View className='pb-20'>
      <View>
         <AtImagePicker
             length={4}
             files={this.state.files}
             onChange={this.onImageChange.bind(this)}
             onFail={this.onFail.bind(this)}
             onImageClick={this.onImageClick.bind(this)}
             showAddBtn={showUploadBtn}
           />
           <View className='font-26 gray px-24'>请上传微信收款码</View>
      </View>
      <View  className='mt-10'>
         <AtImagePicker
             length={4}
             files={this.state.files}
             onChange={this.onImageChange.bind(this)}
             onFail={this.onFail.bind(this)}
             onImageClick={this.onImageClick.bind(this)}
             showAddBtn={showUploadBtn}
           />
           <View className='font-26 gray px-24'>请上传支付宝收款码</View>
      </View>
   </View>
    }
    return (
      <view className='add-good-container'>
        <View className='basic-info bg-white mt-10'>
          <AtList className='border-radius-12'>
           <AtListItem
              title='收款码支付'
              hasBorder={false}
              isSwitch
              switchColor='#FFD947'
              switchIsCheck={this.state.QRcodeStatus}
              onSwitchChange={this.QRcodeStatusChange.bind(this)}
              cursorSpacing={300}
              adjustPosition={true}
              iconInfo={{ size: 20, color: '#000', value: 'credit-card', }}
            />
            {QRcodeMethods}
          </AtList>
        </View>
        <View className='basic-info bg-white mt-20'>
          <AtList className='border-radius-12'>
            <AtListItem
              title='转账支付'
              isSwitch
              switchColor='#FFD947'
              switchIsCheck={this.state.transferStatus}
              onSwitchChange={this.transferStatusChange.bind(this)}
              cursorSpacing={300}
              adjustPosition={true}
              iconInfo={{ size: 20, color: '#000', value: 'credit-card', }}
            />
            {transferAccount}
            <AtListItem
              title='其他支付'
              isSwitch
              switchColor='#FFD947'
              switchIsCheck={this.state.otherPayMethods}
              onSwitchChange={this.otherPayMethodsChange.bind(this)}
              cursorSpacing={300}
              adjustPosition={true}
              iconInfo={{ size: 20, color: '#000', value: 'credit-card', }}
            />
          </AtList>
        </View>
        <View className='submit-btn mt-40 pb-20'>
          <AtButton type='primary' disabled={this.state.Submited} size='normal' circle='true' >确定</AtButton>
        </View>
      </view>
    )
  }
}
