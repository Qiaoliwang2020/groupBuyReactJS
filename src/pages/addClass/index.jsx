import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import  api from "../../services/api";
import { View, Text } from '@tarojs/components'
import { AtInput,AtTextarea,AtForm,AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/textarea.scss";
import './index.less'

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      name: '',
      description:''
    }
  }
  handleNameChange (name) {
    this.setState({
      name:name
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return name
  }
  handleDescrptionChange (description) {
    this.setState({
      description:description
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return description
  }
  addCategories(){
    if (!this.state.name){
      Taro.showToast({
        title: '请输入分类标题',
        icon:'none',
        duration: 2000
      })
      return false;
    }
    let params = {
      name:this.state.name,
      description:this.state.description,
    }
    let addCategories =  api.post('/categories/addCategories',params,'application/json')
    addCategories.then(()=>{
      Taro.showToast({
        title: '添加成功',
        icon:'success',
        duration: 2000
      })
    }).catch((err)=>{
      Taro.showToast({
        title: err.errMsg,
        icon:'loading',
        duration: 2000
      })
    })
    setTimeout(()=>{
        Taro.navigateBack({
          delta: 1
        })
      },
    1000)
  }
  render () {
    return (
      <view className=''>
        <View className='bg-white mt-20 mb-20'>
          <AtForm className='form-wrap'>
            <AtInput
              name='value'
              title='分类名称'
              type='text'
              placeholder='分类名称'
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
            />
            <AtTextarea
              value={this.state.description}
              onChange={this.handleDescrptionChange.bind(this)}
              maxLength={200}
              placeholder='分类描述...'
            />
          </AtForm>
        </View>
        <View className='px-24 mt-40'>
          <AtButton type='primary' size='normal' circle='true' onClick={this.addCategories.bind(this)}>确定</AtButton>
        </View>
      </view>
    )
  }
}
