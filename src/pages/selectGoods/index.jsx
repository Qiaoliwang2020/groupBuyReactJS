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

  constructor () {
    super(...arguments)
    this.state = {
      search: '',
      current: 0,
    }
  }
  handleIndexClick (value) {
    this.setState({
      current: value
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
            current={this.state.current}
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
            <AtTabsPane current={this.state.current} index={0}>
              <View className='pb-30'>
                <checkbox className="checkbox">
                  <View className='goods-card'>
                     <image className='goods-pic' src="https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg"></image>
                     <View className='goods-detail'>
                        <View className='goods-title line-1-ellipsis'>课程是指学校学生所应学习的学科总和及其进程与安排。课程是对教育的目标</View>
                       <View className='goods-detail-bottom'>
                         <text className='goods-price'>$19.99</text>
                         <text className='goods-status'>已加入团购中</text>
                       </View>
                     </View>
                  </View>
                </checkbox>

                <checkbox className="checkbox">
                  <View className='goods-card'>
                    <image className='goods-pic' src="https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg"></image>
                    <View className='goods-detail'>
                      <View className='goods-title line-1-ellipsis'>课程是指学校学生所应学习的学科总和及其进程与安排。课程是对教育的目标</View>
                      <View className='goods-detail-bottom'>
                        <text className='goods-price'>$19.99</text>
                        <text className='goods-status'>已加入团购中</text>
                      </View>
                    </View>
                  </View>
                </checkbox>

                <checkbox className="checkbox">
                  <View className='goods-card'>
                    <image className='goods-pic' src="https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg"></image>
                    <View className='goods-detail'>
                      <View className='goods-title line-1-ellipsis'>课程是指学校学生所应学习的学科总和及其进程与安排。课程是对教育的目标</View>
                      <View className='goods-detail-bottom'>
                        <text className='goods-price'>$19.99</text>
                        <text className='goods-status'>已加入团购中</text>
                      </View>
                    </View>
                  </View>
                </checkbox>

                <checkbox className="checkbox">
                  <View className='goods-card'>
                    <image className='goods-pic' src="https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg"></image>
                    <View className='goods-detail'>
                      <View className='goods-title line-1-ellipsis'>课程是指学校学生所应学习的学科总和及其进程与安排。课程是对教育的目标</View>
                      <View className='goods-detail-bottom'>
                        <text className='goods-price'>$19.99</text>
                        <text className='goods-status'>已加入团购中</text>
                      </View>
                    </View>
                  </View>
                </checkbox>

                <checkbox className="checkbox">
                  <View className='goods-card'>
                    <image className='goods-pic' src="https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg"></image>
                    <View className='goods-detail'>
                      <View className='goods-title line-1-ellipsis'>课程是指学校学生所应学习的学科总和及其进程与安排。课程是对教育的目标</View>
                      <View className='goods-detail-bottom'>
                        <text className='goods-price'>$19.99</text>
                        <text className='goods-status'>已加入团购中</text>
                      </View>
                    </View>
                  </View>
                </checkbox>

                <checkbox className="checkbox">
                  <View className='goods-card'>
                    <image className='goods-pic' src="https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg"></image>
                    <View className='goods-detail'>
                      <View className='goods-title line-1-ellipsis'>课程是指学校学生所应学习的学科总和及其进程与安排。课程是对教育的目标</View>
                      <View className='goods-detail-bottom'>
                        <text className='goods-price'>$19.99</text>
                        <text className='goods-status'>已加入团购中</text>
                      </View>
                    </View>
                  </View>
                </checkbox>

                <checkbox className="checkbox">
                  <View className='goods-card'>
                    <image className='goods-pic' src="https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg"></image>
                    <View className='goods-detail'>
                      <View className='goods-title line-1-ellipsis'>课程是指学校学生所应学习的学科总和及其进程与安排。课程是对教育的目标</View>
                      <View className='goods-detail-bottom'>
                        <text className='goods-price'>$19.99</text>
                        <text className='goods-status'>已加入团购中</text>
                      </View>
                    </View>
                  </View>
                </checkbox>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={1}>
              <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={2}>
              <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={3}>
              <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={4}>
              <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
            </AtTabsPane>
            <AtTabsPane current={this.state.current} index={5}>
              <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
            </AtTabsPane>
          </AtTabs>
        </View>
        <View className='tab-btn-bottom'>
          <View className='add-new-good'>
            <AtIcon value='add-circle' size='24'/>
            <text className='add-text'>新增商品</text>
          </View>
          <View className='add-buttons'>
            <AtButton className='add-all' type='secondary'>一键添加当前页</AtButton>
            <AtButton className='add-select' type='primary'>确认添加</AtButton>
          </View>
        </View>
      </view>
    )
  }
}
