import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton,AtSearchBar } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/search-bar.scss";
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor () {
    super(...arguments)
    this.state = {
      search: '',
    }
  }
  onSearchChange (value) {
    this.setState({
      search: value
    })
  }
  onSearchActionClick () {
    console.log('开始搜索')
  }

  navigateToAddNewSite () {
    Taro.navigateTo({
      url:'/pages/addPickUpSite/index'
    })
  }

  render () {
    return (
      <View className='pick-up-site'>
        <AtSearchBar className='search-bar'
                     fixed
                     actionName='搜索'
                     value={this.state.search}
                     onChange={this.onSearchChange.bind(this)}
                     onActionClick={this.onSearchActionClick.bind(this)}
        />
        <View className='pick-up-list'>
          <View className='site-item'>
             <View className='site-name'>Le Crois</View>
             <View className='address'>
               235 Springvale Road, Glen Waverley, Victoria, Australia
             </View>
            <View className='item-bottom'>
              <View className='green'>已设置定位</View>
              <View>取消定位</View>
              <View>定位</View>
              <View>编辑</View>
              <View>删除</View>
            </View>
          </View>
          <View className='no-data'>
            <View className='no-data-icon' />
            您还没有添加自提点，请先添加一个自提点
          </View>
          <View className='bottom-btn'>
            <AtButton type='primary' circle  onClick={this.navigateToAddNewSite.bind(this)}>新增自提点</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
