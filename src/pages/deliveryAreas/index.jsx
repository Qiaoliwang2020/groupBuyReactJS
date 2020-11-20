import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton,AtSearchBar,AtIcon } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
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

  navigateToAddNewArea () {
    Taro.navigateTo({
      url:'/pages/addDeliveryArea/index'
    })
  }

  render () {
    return (
      <View className='delivery-area'>
        <AtSearchBar className='search-bar'
                     fixed
                     actionName='搜索'
                     value={this.state.search}
                     onChange={this.onSearchChange.bind(this)}
                     onActionClick={this.onSearchActionClick.bind(this)}
        />
        <View className='delivery-area-list'>
          <View className='area-item bg-white mb-10'>
            <View className='item-content'>
              <View>
                <text className='card-title'>墨尔本city</text>
                <text className='card-address'>不包邮！</text>
              </View>
              <AtButton className='card-type' type='primary' size='small' circle>运费: A$5.00</AtButton>
              {/*<View>*/}
              {/*<View>包含区域</View>*/}
              {/*<View>Melbourne,VIC,3000</View>*/}
              {/*</View>*/}
            </View>
            <View className='item-bottom'>
              <View className='default-flex'><AtIcon className='mr-10' value='map-pin' size='16' color='#666'></AtIcon>查看包含区域</View>
              <View className='default-flex'>
                <View className='default-flex mr-20'><AtIcon className='mr-10' value='iphone' size='16' color='#666'></AtIcon>编辑</View>
                <View className='default-flex'><AtIcon className='mr-10' value='trash' size='16' color='#666'></AtIcon>删除</View>
              </View>
            </View>
          </View>
          <View className='area-item bg-white mb-10'>
            <View className='item-content'>
              <View>
                <text className='card-title'>Burwood</text>
                <text className='card-address'>满35澳元包邮！</text>
              </View>
              <AtButton className='card-type' type='primary' size='small' circle>运费: A$0.00</AtButton>
              {/*<View>*/}
              {/*<View>包含区域</View>*/}
              {/*<View>Melbourne,VIC,3000</View>*/}
              {/*</View>*/}
            </View>
            <View className='item-bottom'>
              <View className='default-flex'><AtIcon className='mr-10' value='map-pin' size='16' color='#666'></AtIcon>查看包含区域</View>
              <View className='default-flex'>
                <View className='default-flex mr-20'><AtIcon className='mr-10' value='iphone' size='16' color='#666'></AtIcon>编辑</View>
                <View className='default-flex'><AtIcon className='mr-10' value='trash' size='16' color='#666'></AtIcon>删除</View>
              </View>
            </View>
          </View>

          <View className='no-data'>
            <View className='no-data-icon' />
            您还没有添加配送区域，请先添加一个区域
          </View>
          <View className='bottom-btn'>
            <AtButton type='primary' circle  onClick={this.navigateToAddNewArea.bind(this)}>新增配送区域</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
