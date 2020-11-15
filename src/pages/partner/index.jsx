import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View} from '@tarojs/components'
import { AtButton,AtInput,AtTag,AtAvatar,AtModal, AtModalHeader, AtModalContent, AtModalAction} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/tag.scss";
import "taro-ui/dist/style/components/avatar.scss";
import "taro-ui/dist/style/components/modal.scss";

import './index.less'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      partnerName: '',
      useIntro:false,
      showEdit:false,
      editValue:''
    }
  }

  componentWillMount () {
  }

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidShow () {}
  componentDidHide () {}

  toIndex(){
    Taro.switchTab({
      url:`/pages/profile/index`,
    })
  }
  handlePartnerNameChange (value) {
    this.setState({
      partnerName:value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  showUseInfo(){
    this.setState({
      useIntro:true
    })
  }
  hideUseInfo(){
    this.setState({
      useIntro:false
    })
  }
  showEditModal(){
    this.setState({
      showEdit:true,
      editValue:'陈小扁'
    })
  }
  hideEditModal(){
    this.setState({
      showEdit:false
    })
  }
  delPartner(){
    Taro.showModal({
      title: '提示',
      content: '是否收回小伙伴用户权限？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

  render () {

    return (
      <View className='partners'>
        <View className='bg-white mb-10 mt-10'>
          <View className='question-card bg-white' onClick={this.showUseInfo.bind(this)}>
            <AtTag className='question-tag' size='small'  type='primary' active={true}>置顶</AtTag>
            <View className='question-title'>如何邀请小伙伴？点这里小团来教你</View>
          </View>
          <View className='question-card bg-white'>
            <AtTag className='question-tag' size='small'  type='primary' active={true}>置顶</AtTag>
            <View className='question-title'>分享拼团大V招募啦！</View>
          </View>
        </View>
        <View className='partner-name bg-white'>
          <AtInput
            name='partnerName'
            type='text'
            placeholder='请输入小伙伴备注名'
            value={this.state.partnerName}
            onChange={this.handlePartnerNameChange.bind(this)}
          />
          <AtButton type='primary' size='small' circle>邀请伙伴</AtButton>
        </View>
        <View className='partners-list mt-20 bg-white'>
           <View className='partner-item'>
             <View className='item-left' onClick={this.showEditModal.bind(this)}>
               <AtAvatar image='https://jdc.jd.com/img/200' size='small'></AtAvatar>
               <View className='name'>陈小扁</View>
               <View className='remark'>Le 面包店</View>
             </View>
             <View className='item-right' onClick={this.delPartner.bind(this)}>删除</View>
           </View>
          <View className='partner-item'>
            <View className='item-left' onClick={this.showEditModal.bind(this)}>
              <AtAvatar image='https://jdc.jd.com/img/200' size='small'></AtAvatar>
              <View className='name'>陈小扁</View>
              <View className='remark'>Le 面包店</View>
            </View>
            <View className='item-right' onClick={this.delPartner.bind(this)}>删除</View>
          </View>
        </View>
        <AtModal isOpened={this.state.useIntro}>
          <AtModalHeader>使用说明</AtModalHeader>
          <AtModalContent>
            <View className='content-item'>
              <View className='bold'>1. 如何邀请小伙伴?</View>
              为小伙伴取个名后，将邀请链接发送给朋友，朋友点击链接并同意即可成为您的小伙伴。
            </View>
            <View className='content-item'>
              <View className='bold'>2. 小伙伴的作用？</View>
              小伙伴可以操作您的拼团信息，编辑商品，发布团购，但无法查看您的收益页面。
            </View>
            <View className='content-item'>
              <View className='bold'>3.如何删除小伙伴？</View>
              点击小伙伴后的删除即可删除小伙伴，如果需要让他重新成为小伙伴可再次邀请。
            </View>
          </AtModalContent>
          <AtModalAction><button onClick={this.hideUseInfo.bind(this)}>知道了</button> </AtModalAction>
        </AtModal>

        <AtModal isOpened={this.state.showEdit}>
          <AtModalHeader>修改伙伴名</AtModalHeader>
          <AtModalContent>
            <AtInput name='editValue' type='text' value={this.state.editValue} />
          </AtModalContent>
          <AtModalAction> <button onClick={this.hideEditModal.bind(this)}>取消</button> <button>确定</button> </AtModalAction>
        </AtModal>
      </View>
    )
  }
}
