import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtRadio,AtButton,AtList, AtListItem,AtInput } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/radio.scss";
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
      deliveryMode:''
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
  handleDeliveryMode (value) {
    this.setState({
      deliveryMode: value
    })
  }

  render () {
    return (
      <View className='add-pick-up-site'>
        <AtList className='mt-20'>
          <AtInput
            name='siteName'
            title='配送范围'
            type='text'
            placeholder='如"墨尔本CBD"'
            value={this.state.siteName}
            onChange={this.handleSiteNameChange.bind(this)}
          />
          <AtInput
            name='contactName'
            title='配送费用'
            type='digit'
            placeholder='0.00'
            value={this.state.contactName}
            onChange={this.handleContactChange.bind(this)}
          />
          <AtListItem title='包邮方式' extraText='不包邮' arrow='right' />
        </AtList>
        <AtList className='mt-20'>
          <View className='px-24 pt-20 pb-20 default-list-title'>选择配送方式</View>
          <AtRadio
            options={[
              { label: '全澳配送', value: 'option1'},
              { label: '限制配送区域', value: 'option2', desc: '添加配送区域' },
            ]}
            value={this.state.deliveryMode}
            onClick={this.handleDeliveryMode.bind(this)}
          />
        </AtList>

        <View className='mt-40 px-24'>
          <AtButton type='primary' circle>保存</AtButton>
        </View>
      </View>
    )
  }
}
