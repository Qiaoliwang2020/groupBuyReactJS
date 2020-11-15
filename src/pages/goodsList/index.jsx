import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import  api from "../../services/api";
import { View, Text } from '@tarojs/components'
import { AtButton,AtSearchBar , AtTabs, AtTabsPane,AtIcon} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/tabs.scss";
import './index.less'

export default class Index extends Component {
  componentDidMount () {

  }
  constructor () {
    super(...arguments)
    this.state = {
      search: '',
      categoryCurrent: 0,
      subCurrent:0,
    }
  }
  handleIndexClick (value) {
    console.log(value,'index')
    this.setState({
      categoryCurrent: value
    })
  }
  handleSubIndexClick (value) {
    console.log(value,'sub')
    this.setState({
      subCurrent: value
    })
  }
  onSearchChange (value) {
    this.setState({
      search: value
    })
  }
  onSearchActionClick () {
    console.log('开始搜索')
  }

  navigateToClassManagement(){
    Taro.navigateTo({
      url:'/pages/addClass/index'
    })
  }
  navigateToAddgood(){
    Taro.navigateTo({
      url:'/pages/addGood/index'
    })
  }

  render () {
    return (
      <view className='warehouse-view'>
        <AtSearchBar className='search-bar'
          fixed
          actionName='搜索'
          value={this.state.search}
          onChange={this.onSearchChange.bind(this)}
          onActionClick={this.onSearchActionClick.bind(this)}
        />
        <View className='tab-categories'>
          <AtTabs
            current={this.state.categoryCurrent}
            scroll
            tabList={[
              { title: '全部' },
              { title: '分类2' },
              { title: '分类3' },
              { title: '分类4' },
              { title: '分类5' },
              { title: '分类6' }
            ]}
            onClick={this.handleIndexClick.bind(this)}>
            <AtTabsPane current={this.state.categoryCurrent}>
              <View className='sub-category-tab'>
                <AtTabs
                  current={this.state.subCurrent}
                  scroll
                  height='auto'
                  tabDirection='vertical'
                  tabList={[
                    { title: '标签页1标签页1标签页1标签页1' },
                    { title: '标签页2' },
                    { title: '标签页3' },
                    { title: '标签页4' },
                    { title: '标签页5' },
                    { title: '标签页6' },
                  ]}
                  animated={false}
                  onClick={this.handleSubIndexClick.bind(this)}>
                  <AtTabsPane tabDirection='vertical' current={this.state.subCurrent}>
                    <View>
                      <View className='goods-card'>
                        <image className='goods-pic' src="https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg"></image>
                        <View className='goods-detail'>
                          <View className='goods-title line-1-ellipsis'>课程是指学校学生所应学习的学科总和及其进程与安排。课程是对教育的目标</View>
                          <View className='goods-detail-bottom'>
                            <text className='goods-price'>$19.99</text>
                            <View className='goods-status'>
                               <View className='edit mr-20'>编辑</View>
                               <View className='del'>删除</View>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View className='goods-card'>
                        <image className='goods-pic' src="https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg"></image>
                        <View className='goods-detail'>
                          <View className='goods-title line-1-ellipsis'>课程是指学校学生所应学习的学科总和及其进程与安排。课程是对教育的目标</View>
                          <View className='goods-detail-bottom'>
                            <text className='goods-price'>$19.99</text>
                            <View className='goods-status'>
                              <View className='edit mr-20'>编辑</View>
                              <View className='del'>删除</View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </AtTabsPane>
                </AtTabs>
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
        <View className='tab-btn-bottom'>
          <View className='add-buttons'>
            <AtButton className='add-all' type='secondary' onClick={this.navigateToClassManagement.bind(this)}>分类管理</AtButton>
            <AtButton className='add-select' type='primary' onClick={this.navigateToAddgood.bind(this)}>新增商品</AtButton>
          </View>
        </View>
      </view>
    )
  }
}
