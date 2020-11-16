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
          <View className='no-data'>
            <View className='no-data-icon' />
            您还没有添加自提点，请先添加一个自提点
          </View>
          <View className='bottom-btn'>
            <AtButton type='primary' circle>新增自提点</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
