import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import  api from "../../services/api";
import { View, Text,Picker } from '@tarojs/components'
import { AtInput,AtTextarea,AtForm,AtButton,AtImagePicker,AtList, AtListItem,AtAccordion,AtCheckbox} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/textarea.scss";
import "taro-ui/dist/style/components/image-picker.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/accordion.scss";
import "taro-ui/dist/style/components/checkbox.scss";
import "taro-ui/dist/style/components/icon.scss";

import './index.less'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      title: '',
      description:'',
      files: [],
      currency:['澳币','人民币'],
      currencyChecked: '澳币',
      discount:false,
      discountList:[],
      groupTime:false,
      dateStartSel:'2020-07-22',
      dateEndSel: '2020-12-22'
    }
    this.discountOption = [{
      value: 'discount1',
      label: '新客首单优惠 - 10% off',
      desc: '该折扣是首次在本平台下单的新客户折扣，该折扣不能与其他折扣叠加使用。'
    },{
      value: 'discount2',
      label: '买家积分抵扣 - 至多抵扣 $3 每单',
      desc: '买家购买商品后获得积分，每1000积分可抵扣 $1 ',
    }]
  }

  onImageChange (files) {
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
  onCurrencyChange = e => {
    this.setState({
      currencyChecked: this.state.currency[e.detail.value]
    })
  }
  selectPayMethod =()=>{
    Taro.navigateTo({
      url:'/pages/payMethod/index'
    })
  }
  handleDiscount (event) {
    this.setState({
      discount: event.detail.value
    })
  }
  handleDiscountChange (value) {
    this.setState({
      discountList: value
    })
  }
  handleTimeChange(event){
    this.setState({
      groupTime: event.detail.value
    })
  }
  onStartDateChange = e => {
    this.setState({
      dateStartSel: e.detail.value
    })
  }
  onEndDateChange = e => {
    this.setState({
      dateEndSel: e.detail.value
    })
  }
  selectFromStore =()=>{
    Taro.navigateTo({
      url:`/pages/selectGoods/index`,
    })
  }
  addNewGood =()=>{
    Taro.navigateTo({
      url:`/pages/addGood/index`,
    })
  }
  render () {
    let GTime = this.state.groupTime;
    let time = null;
    let discountStatus = this.state.discount;
    let discountList = null;
    if (GTime){
      time = <View className='page-section'>
        <View className='select-date'>
          <Picker mode='date' onChange={this.onStartDateChange}>
            <AtList hasBorder={false}>
              <AtListItem title='从' extraText={this.state.dateStartSel} />
            </AtList>
          </Picker>
          <Picker mode='date' onChange={this.onEndDateChange}>
            <AtList hasBorder={false}>
              <AtListItem title='至' extraText={this.state.dateEndSel} />
            </AtList>
          </Picker>
        </View>
      </View>
    }
    if (discountStatus){
      discountList =  <AtList hasBorder={false}>
        <AtCheckbox
          hasBorder={false}
          options={this.discountOption}
          selectedList={this.state.discountList}
          onChange={this.handleDiscountChange.bind(this)}
        />
      </AtList>
    }
    return (
      <View className='group-buy-view'>
        <AtForm className='form-wrap'>
          <View className='bg-white'>
            <View className='container group-buy bg-white pb-20'>
              <AtInput className='title-input'
                       name='title'
                       type='text'
                       placeholder='请输入团购主题，最多20字（选填）'
                       value={this.state.title}
              />
              <AtTextarea className='des-text'
                          value={this.state.description}
                          maxLength={1000}
                          placeholder='请在此输入此次团购的介绍信息...'
              />
              <AtImagePicker
                className='group-img'
                files={this.state.files}
                onChange={this.onImageChange.bind(this)}
              />
              <text className='notice-text'>建议上传您的微信二维码，方便新买家联系到您</text>
              <text className='notice-text'>长按选择分享封面图，建议封面尺寸500x400</text>
            </View>
          </View>

          <View className='bg-white mt-20'>
            <AtList>
                <Picker mode='selector' range={this.state.currency} onChange={this.onCurrencyChange.bind(this)}>
                    <AtListItem
                      title='货币'
                      extraText={this.state.currencyChecked} arrow='right' iconInfo={{ size: 20, color: '#000', value: 'tags', }}
                    />
                </Picker>
              <AtListItem title='收款方式' extraText='请选择' arrow='right' iconInfo={{ size: 20, color: '#000', value: 'credit-card', }} onClick={this.selectPayMethod.bind(this)} />
              <AtListItem title='配送方式' extraText='详细信息' arrow='right' iconInfo={{ size: 20, color: '#000', value: 'equalizer', }} />
              {/*<AtListItem title='设置地区' extraText='SouthBank' arrow='right' />*/}
              {/*<AtListItem title='最低成团人数' extraText='10人' note='例如City 最低10人成团提供配送' arrow='right' />*/}
              <AtListItem className='setting-has-note' title='设置优惠' note='可以设置多种优惠，优惠不会叠加，下单客户只能选择使用一种优惠。' iconInfo={{ size: 20, color: '#000', value: 'money', }} switchColor='#FFD947'  switchIsCheck={this.state.discount}  isSwitch onSwitchChange={this.handleDiscount.bind(this)}/>
              {discountList}
              <AtListItem className='setting-has-note' title='团购时间' note='开启后，会根据您设置的团购时间自动开启和截止团购' iconInfo={{ size: 20, color: '#000', value: 'clock', }}  switchColor='#FFD947'  switchIsCheck={this.state.groupTime}  isSwitch onSwitchChange={this.handleTimeChange.bind(this)}/>
              {time}
              <AtListItem title='其他设置' arrow='right' iconInfo={{ size: 20, color: '#000', value: 'settings', }} />
            </AtList>
          </View>
          <View className='bg-white mt-20'>
            <AtList className='addGoods-button'>
              <AtListItem title='从商品库中选取商品' arrow='right'  iconInfo={{ size: 20, color: '#000', value: 'shopping-bag', }} onClick={this.selectFromStore.bind(this)} />
              <AtListItem title='直接添加商品' arrow='right' iconInfo={{ size: 20, color: '#000', value: 'add-circle', }}  onClick={this.addNewGood.bind(this)} />
            </AtList>
          </View>
        </AtForm>
        <View className='feedback-box'>
          <text>使用帮助</text>
          <text>问题反馈</text>
        </View>
        <View className='tab-btn-bottom'>
          <AtButton circle type='secondary' className='save-group'>预览并保存</AtButton>
          <AtButton circle type='primary' className='submit-group'>发布团购</AtButton>
        </View>
      </View>
    )
  }
}
