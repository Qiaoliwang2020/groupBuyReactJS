import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton,AtList, AtListItem,AtInput } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/input.scss";
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
      siteName: '',
      contactName:'',
      contactNumber:''
    }
  }
  handleSiteNameChange (value) {
    this.setState({
      siteName: value
    })
    return value
  }
  handleContactChange (value) {
    this.setState({
      contactName: value
    })
    return value
  }
  handleContactNumberChange(value){
    this.setState({
      contactNumber: value
    })
    return value
  }

  render () {
    return (
      <View className='add-pick-up-site'>
        <AtList className='mt-20'>
          <AtInput
            name='siteName'
            title='自提点名称'
            type='text'
            placeholder='请输入自提点名称'
            value={this.state.siteName}
            onChange={this.handleSiteNameChange.bind(this)}
          />
          <AtInput
            name='contactName'
            title='联系人'
            type='text'
            placeholder='请输入联系人名字'
            value={this.state.contactName}
            onChange={this.handleContactChange.bind(this)}
          />
          <AtInput
            name='value'
            title='联系电话'
            type='text'
            placeholder='请输入手机或固话'
            value={this.state.contactNumber}
            onChange={this.handleContactNumberChange.bind(this)}
          />
        </AtList>
        <AtList className='mt-20'>
          <AtListItem title='国家' extraText='Australia' arrow='right' />
          <AtListItem title='Postcode' note='Enter postcode' extraText='' arrow='right' />
          <AtListItem title='City' extraText='' />
          <AtListItem title='Area' extraText='' />
          <AtListItem title='State' extraText=''/>
        </AtList>

        <View className='mt-40 px-24'>
          <AtButton type='primary' circle>保存</AtButton>
        </View>
      </View>
    )
  }
}
