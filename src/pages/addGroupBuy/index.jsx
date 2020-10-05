import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import  api from "../../services/api";
import { View, Text } from '@tarojs/components'
import { AtInput,AtTextarea,AtForm,AtButton,AtImagePicker,AtList, AtListItem} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/textarea.scss";
import "taro-ui/dist/style/components/image-picker.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import './index.less'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      title: '',
      description:'',
      files: [],
    }
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
  render () {
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
              <AtListItem title='货币' extraText='详细信息' arrow='right' />
              <AtListItem title='收款方式' extraText='详细信息' arrow='right' />
              <AtListItem title='配送方式' extraText='详细信息' arrow='right' />
              <AtListItem title='优惠设置' extraText='新客首单-10%'  arrow='right' />
              <AtListItem title='团购时间' note='开启后，会根据您设置的团购时间自动开启和截止团购'  isSwitch onSwitchChange={this.handleChange}/>
              <AtListItem title='设置时间' extraText='2020-10-05' arrow='right' />
              <AtListItem title='其他设置' arrow='right' />
            </AtList>
          </View>
          <View className='addGoods-button'>
            <AtButton type='secondary'>从商品库中选取</AtButton>
            <AtButton type='secondary'>直接添加商品</AtButton>
          </View>
        </AtForm>
        <View className='feedback-box'>
          <text>使用帮助</text>
          <text>问题反馈</text>
        </View>
        <View className='tab-btn-bottom'>
          <AtButton circle type='secondary' className='save-group'>保存</AtButton>
          <AtButton circle type='primary' className='submit-group'>发布团购</AtButton>
        </View>
      </View>
    )
  }
}
