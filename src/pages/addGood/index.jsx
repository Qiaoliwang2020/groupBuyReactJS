import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import  api from "../../services/api";
import { View, Text } from '@tarojs/components'
import { AtInput,AtTextarea,AtDrawer,AtButton,AtList, AtListItem,AtIcon,AtImagePicker,AtRadio,AtToast} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/textarea.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/image-picker.scss";
import "taro-ui/dist/style/components/radio.scss";
import "taro-ui/dist/style/components/drawer.scss";
import "taro-ui/dist/style/components/toast.scss";
import "taro-ui/dist/style/components/icon.scss";
import './index.less'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      name: '',
      description:'',
      unitSelector: '',
      unitValue:'',
      unitOptions:[
        { label: '件', value: '0', },
        { label: 'KG', value: '1' },
        { label: '500g', value: '2' },
        { label: 'Dozen', value: '3', },
        { label: '箱', value: '4' },
        { label: '条', value: '5' },
        { label: '个', value: '6' },
        { label: '袋', value: '7' }
      ],
      files: [],
      originPrice:'',
      groupPrice:'',
      groupPriceStatus:false,
      unitPanel:false,
      warning:false,
      warningText:'',
    }
  }
  handleNameChange=(name)=>{

  }
  onUnitChange = value => {
    this.setState({
      unitSelector: value,
      warning:false,
      warningText:''
    })
  }
  handleOriginPriceChange = value =>{
    this.setState({
      originPrice: value
    })
  }
  onImageChange(files) {
    this.setState({
      files
    })
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }
  openGroupPriceChange = e =>{
    this.setState({
      groupPriceStatus: e.detail.value
    })
  }
  handleGroupPriceChange = value =>{
     this.setState({
       groupPrice:value
     })
  }
  openSKUChange = e =>{

  }
  showUnitPanel =()=>{
    this.setState({
      unitPanel:true,
    })
  }
  checkUnitChange =()=>{
    let label ='';
    let selected = this.state.unitSelector;

    this.setState({
      warning:false,
      warningText:''
    })

    if (selected) {
      label = this.state.unitOptions[this.state.unitSelector].label;
      this.setState({
        unitPanel:false,
        unitValue:label
      })
    }
    else {
      this.setState({
        warning:true,
        warningText:'请选择一个单位'
      })
    }

  }
  render () {
    let warningEle = '';
    let gPriceStatus = this.state.groupPriceStatus;
    let gPrice = null;
    if (gPriceStatus){
      gPrice =  <AtInput
        name='groupPrice'
        title='团购价'
        type='digit'
        placeholder='请输入团购价'
        value={this.state.groupPrice}
        onChange={this.handleGroupPriceChange.bind(this)}
      />
    }

    if (this.state.warning){
      warningEle = <AtToast isOpened text={this.state.warningText} icon='close-circle'></AtToast>
    }
    return (
      <view className='add-good-container'>
        <View className='basic-info bg-white'>
          <View className='info-title'>
            <AtIcon value='shopping-bag' size='20'  className='mr-10'></AtIcon>
            基础信息
          </View>
          <AtList className='border-radius-12'>
            <AtInput
              name='name'
              title='商品名称'
              type='text'
              placeholder='请输入商品名称'
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
            />
            <AtListItem title='商品分类' extraText='暂无分类' arrow='right' />
            <View className='textarea-title'>商品说明</View>
            <View className='px-12'>
              <AtTextarea
                value={this.state.description}
                maxLength={140}
                placeholder='请输入商品说明...'
              />
            </View>
            <AtListItem title='请选择单位' className='top-line-item'
                        extraText={this.state.unitValue}
                        onClick={this.showUnitPanel.bind(this)}
                        arrow='right' />
            <AtDrawer
              show={this.state.unitPanel}
              mask
              right
            >
              <View className='drawer-item'>
                <AtRadio
                  options={this.state.unitOptions}
                  value={this.state.unitSelector}
                  onClick={this.onUnitChange.bind(this)}
                />
              </View>
              <View className='drawer-item'>
                <View className='px-32 mt-40'>
                 <AtButton type='primary' size='small' circle onClick={this.checkUnitChange.bind(this)}>确认选择</AtButton>
                </View>
                <View className='px-32 mt-40'>
                  <AtButton type='secondary' circle  size='small'>
                    <AtIcon value='add' size='16' />
                    添加自定义单位
                  </AtButton>
                </View>
              </View>

            </AtDrawer>
            <AtListItem
              title='设置商品规格'
              isSwitch
              switchColor='#FFD947'
              onSwitchChange={this.openSKUChange}
            />
          </AtList>
        </View>
        <View className='basic-info bg-white mt-20'>
          <View className='info-title'>
            <AtIcon value='image' size='20'  className='mr-10'></AtIcon>
            商品图片（最多可添加9张）
          </View>
          <AtList className='border-radius-12 pt-20 pb-20'>
            <AtImagePicker
              count={9}
              length={4}
              files={this.state.files}
              onChange={this.onImageChange.bind(this)}
              onFail={this.onFail.bind(this)}
              onImageClick={this.onImageClick.bind(this)}
            />
          </AtList>
        </View>
        <View className='basic-info bg-white mt-20'>
          <View className='info-title'>
            <AtIcon value='credit-card' size='20'  className='mr-10'></AtIcon>
            价格
          </View>
          <AtList className='border-radius-12'>
            <AtInput
              name='originPrice'
              title='商品价格'
              type='digit'
              placeholder='请输入商品价格'
              value={this.state.originPrice}
              onChange={this.handleOriginPriceChange.bind(this)}
            />
            <AtListItem
              title='设置团购价'
              isSwitch
              switchColor='#FFD947'
              switchIsCheck={this.state.groupPriceStatus}
              onSwitchChange={this.openGroupPriceChange.bind(this)}
            />
            {gPrice}
          </AtList>
        </View>
        <View className='mt-40'>
          <AtButton type='primary' size='normal' circle='true'>确定</AtButton>
        </View>
        {warningEle}
      </view>
    )
  }
}
