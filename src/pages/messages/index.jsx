import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {  AtTabs, AtTabsPane ,AtCard,AtList, AtListItem} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/tabs.scss";
import "taro-ui/dist/style/components/card.scss";
import "taro-ui/dist/style/components/list.scss";

import './index.less'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,

    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const tabList = [{ title: '通知' }, { title: '使用教程' }]
    return (
      <View className='message'>
        <AtTabs className='message-tab' current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className='message-list'>
               <Text className='message-time'>
                 06-07 12:00
               </Text>
                <AtCard
                  className='message-card'
                  note='查看订单'
                  title='系统通知'
                >
                  你好，您的团购陶艺0基础体验（交友畅聊）有新订单。
                </AtCard>
              <Text className='message-time'>
                06-07 12:00
              </Text>
              <AtCard
                className='message-card'
                note='查看详情'
                title='合作邀请'
              >
               你好，xxxx邀请您一起合作。
              </AtCard>
              <Text className='message-time'>
                06-07 12:00
              </Text>
              <AtCard
                className='message-card'
                note='查看订单'
                title='系统通知'
              >
                你好，您的团购陶艺0基础体验（交友畅聊）有新订单。
              </AtCard>
              <Text className='message-time'>
                06-07 12:00
              </Text>
              <AtCard
                className='message-card'
                note='查看详情'
                title='合作邀请'
              >
                你好，xxxx邀请您一起合作。
              </AtCard>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View>
              <AtList>
                <AtListItem title='标题文字' note='描述信息' arrow='right' />
                <AtListItem title='标题文字' note='描述信息' arrow='right' />
                <AtListItem
                  arrow='right'
                  note='描述信息'
                  title='标题文字标题文字标题文字标题文字标题文字'
                />
              </AtList>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
