import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View} from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { setGlobalData } from "../../services/global_data"

import "taro-ui/dist/style/components/button.scss" // 按需引入


import './index.less'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      avatarUrl:'',
      nickName:''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  login(){
    Taro.login()
      .then(resLogin => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (resLogin.code) {
          // console.log(resLogin,'res');
          Taro.getUserInfo().then(res=>{
            if(res){
              this.setState({
                avatarUrl: res.userInfo.avatarUrl,
                nickName:res.userInfo.nickName
              })
              setGlobalData('avatarUrl',res.userInfo.avatarUrl);
              setGlobalData('nickName',res.userInfo.nickName);

              setTimeout(()=>{
                Taro.switchTab({
                  url:`/pages/profile/index`,
                })
              },500)
            }
          })
        }
      })
  }

  render () {
    let userAvatar = this.state.avatarUrl,
        logoIcon = null;
    if (userAvatar){
      logoIcon =  <View className='logo-name'  style={{
        backgroundImage: "url(" + this.state.avatarUrl + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} ></View>
    } else {
      logoIcon = <View className='logo-name'>团</View>
    }
    return (
      <View className='login'>
        <View className='default-logo'>
          {logoIcon}
        </View>
        <View className='logo-nickName'>{this.state.nickName}</View>
        <AtButton className='login-btn' type='primary' circle  openType='getUserInfo'
                  onGetUserInfo={this.login.bind(this)}>登录</AtButton>
      </View>
    )
  }
}
