import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View,Text} from '@tarojs/components'
import { AtButton,AtAvatar,AtList,AtListItem,AtTabBar,AtTag,AtActionSheet,AtActionSheetItem } from 'taro-ui'
import { getGlobalData } from "../../services/global_data";

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/avatar.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/flex.scss";
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import "taro-ui/dist/style/components/tag.scss";
import "taro-ui/dist/style/components/action-sheet.scss";
import './index.less'

export default class Index extends Component {

  componentWillMount () {
    wx.getStorage({
      key:'avatarUrl',
      success: (res) => {
        this.setState({
          avatar:res.data
        })
      }
    })
    wx.getStorage({
      key:'nickName',
      success: (res) => {
        this.setState({
          nickName:res.data
        })
      }
    })
  }

  componentDidMount(){}

  componentWillUnmount(){}

  componentDidShow () {}
  componentDidHide () {}

  constructor () {
    super(...arguments)
    this.state = {
      avatar:'',
      nickName:'',
      userIdentity:'seller', // seller
      userIds:['seller','buyer'],
      current: 0
    }
  }
  navigateToCategory (value) {
    this.setState({
      current: value
    })
    Taro.navigateTo({
      url:`/pages/myGroup/index?current=${value}`,
    })
  }
  handleNavToAddGroupBuy(){
    Taro.navigateTo({
      url:`/pages/addGroupBuy/index`,
    })
  }
  navigateToMyGroup(){
    Taro.navigateTo({
      url:`/pages/myGroup/index`,
    })
  }
  navigateToMyOrder(){
    Taro.navigateTo({
      url:`/pages/myOrder/index`,
    })
  }
  navigateToPartnership(){
    Taro.navigateTo({
      url:`/pages/partner/index`
    })
  }
  handleSwitchUserIdentity(){
    Taro.showActionSheet({
      itemColor:'#000',
      itemList: ['商家', '买家'],
    }).then((res)=>{

      this.setState({
        userIdentity:this.state.userIds[res.tapIndex]
      })

    }).catch((res)=>{
      console.log(res.errMsg)
    })
  }
  navigateToGoodsList(){
    Taro.navigateTo({
      url:'/pages/goodsList/index'
    })
  }
  navigateToPickUpSite(){
    Taro.navigateTo({
      url:'/pages/pickUpSite/index'
    })
  }
  navigateToDeliveryArea(){
    Taro.navigateTo({
      url:'/pages/deliveryAreas/index'
    })
  }
  render () {
    let userIdentity = this.state.userIdentity,userIdentityRender;
    userIdentity ==='seller' ? userIdentityRender = <View className='user-seller'>
      <AtListItem hasBorder={false}  title='我的团购' arrow='right' onClick={this.navigateToMyGroup.bind(this)} />
      <AtTabBar
        fontSize='12'
        color='#666666'
        tabList={[
          { title: '全部', image:'data:image/png;base64,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' },
          { title: '拼团中', image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAC8hJREFUeAHtWwlsVMcZ/uetD8xpY8BAF6+NMXht6iKskKA2QKJGghKOHgGJhpQI2oSWtCiRWoUExYoiIlLSQir1oKURIakggGggJDRpKa0BQwlXwKyxjb0+Cgbb+ADW2Lv7pt887zv2en54jY1Uj1hm5r9m5p/5Z/7555loIA1oYEADAxoY0MCABmLSQK7DMS8nw34dv/POzExHTMIiMEPua/i1OTPse+fMmRMXgaTHIFuPOQ2Mo1KGvUeccgBKY4zfaWxpO2xAx1TMz88f4r/b/jcIScTP2d7SeqShtdUdk1ADs2Qo97zI2TCNmfOhWrk3CnfuDIEYpomSele+LlhrIXIhJycnlXV45jNOWZxkMRta4pxWojKqC8BOYxX8XUPGWGCcDZGJrzGI2csYVah1DIATY02c24663O4TKtxqbkkBeRkTVviJthDnw60K7g86DOagxOJWlbjd9Vbb71YBTseE1znx9VYF9jcdY6x+UFxi/tmKigYrfTFVQE5WegHzySc4kb7zMtYBM/AYhUNBI1Dv2k8i4I2091rmDHK5Il9hRYdvY0vwqnJC8QIOJXzoctcuVWnMclMFODMm7OOcL1aEEvmYjVaMSZ+068iRIz6jUKySC1DCVIWO0RaXu26tER9LOT8ra0ynr+O6KsMmSQtLqmoOqHWRK0cv9+1AXx9V4XFky71YXe1S69Fy01MAg/q6ysgZ23apsu6D0MGr+P7MXVVV1ZIU/7SxD37Jr/XdCA8t60s7FCPqXN3ZUWbsjJGE80KJrpx6hGTfwieWl6fX1Xcq6KcXpa5Z9+OpS4jxq2DCj18iKW4/ZT10grFC2SijN8sllZU1Toe9CeaaKuRyLgVOJfNWzBWAEajsjGSl87xs/kQi/y+ovHgRFJQm8MnDbVQX2HcHJcJQiI8DbhzyAqAXkN8n6K/zsrkfEdk2sskHK1W53eVJjN3tUm0XJTpxNxoP9gM/2lWSBA1EozPCLREJhrTUuKEYAI5CXynU+yN18AK3bEEK2SApBYpY8LjYDyMkoSyFz1cq5PCrCyzN0MmKijZsatuFREbsTPJY+WgE6T0GaTMcSUKOwx7QJ1Hh2vHtS7+VkhSJTsBu3/FTYoJE8fGmInV2xtowouUs+9B+HRi9VDB58qgvLl9ugjK0PoVSi/sIJmaMgEvEXrlUXbshlCa0bnkF2BhFHbwQOnSIzfrgBYNwqjjt45fnviyq3aXTZWWNZoPvjj8a3rICogmICa7YKd8AJfwpJjkxMEdVgNWZiaFtAytf2bft6U1HVAAvn7sQ9vmGTtYHJbSntNsHTRmbCDsGefm80bDPHfgFKWfnx8107DS80PuXJL9Me6ZNSf+ko4MbTz7LLWJ3xBEUdY+MKCdMARj4q8oGFUJeUt5O4nefUzzkL+qVNhjdtCInaJYVJ4fz1VYYH2gaHLHxCTzovhCtvyErAB4ekZiFsPSVtHh4fCHkYVS9A2i97W+ou+at6Yk0BEuuICaw4XxZ1X+t8GsjUnz78mLl5heJ8fllo+l781IioXofxmDI2TNn3M+7g9pp3QTExSbgRanIfstFP0R/+iDpCsCtrg/as95EH/VHMwFcNXLv9QixPpqeUIr+BKeZM+1JbfXSN2WZz4CfMh6nVRqu6bdg91cRmK1ATOCguBYHc5nXDArg481J+xqr9yc/M3OKl/sKW67yhYhID1Z6oh73GDn+Kcnv7yREp87gWrzJVVWz08rdQVcAZ1CAKtXaYG+2+Gj1+lq6cNljyimuyrMfHkZb1k+guDiLt0X0p6CgYLCn6cYmr+z9IXqm99Wke1DHdHTmL86M9JcQ03yu9ErNaRPyQCCzi0KJpJgRh+L++nkLfdnN4AUPPDw6XHyLis/cCRURtX69yZvqabxRhDjf6rDBi8ArsQr8jsIUvoRKm8IFIRjj40W5melLwnE6xKhVIQRRHOsp2zHIMnEC4gSZ6QmW6K/d8NKSFyptymwaORjbj8X05xHj+GfFxXVBbmleZubXZPI9BXNYA5sIRGV4EvaLnbkZE0Zectf+3ihKLesKEDE8JYylorrPH50xlLa/lUEXyto1O4zEFYcg2czpQ8k+tnsFdHTK9EJhDTU2+7R3S8z0FSbRs5eqaosU+e7wVkqqqs4Deh6Bk82ezva3sXKeCVAxlH+DYImr1F33r1BOXQFdAUwRw7unNGPaEBK/3kobfltPJRXGsB87NjgxabEIiFhpI0D3A2em/SKX6S3BEzCh3Xjec5aWlgaZi+4HiOhtP6fKmg7a82mz1gth54OY7clIg3dmpj+BWT2MzW4jZjhsZ3VV1f0Sx+NGTRin0azdI1z9oKQrQISu+zm9s/0GyfpBJEvM9tQ5t7slYreUKzs9xrn8c2eWY34kmqUrVq2DErQHU+wpa5xOR9A+pysAcXvsqNcjCeoLmAiq/uP4La0pTOkHeOQ8pwFCCpj1NBXEuDxWLRvzwkK8QzBmmHWeRO086FTQFNB18WCI2/dPKjp1m3x+ffop3ra5N3riqqr9N1bBWU0W509qZRQ0BXQBbcJmtIdHI+H9Lp84p/sINhu75qqoDnqJiqV9vK/q5s1oFlaGNm7DKYDbAF5s8GjxO5xpP7Xa4N5DzfAEcQzC2YmWbPD+ZuHInANvMFqqb9T1jjcozW6j0QfBOXsGz2IzBAxvmDJc4ONwhd9TabjETuHNSEkwnYSTJ98XMY8OAQhSgELB2BvIV0AJw5W6yX+fHGmlV3+F5z8LaeeBm/TRH7IoOzOy89TQZHhwZnTNgkiNBIMSr8JdL8PK3YA/lzMx/WZpZc3Hgoj5cVnSqIlulivfGykK0JaCimfZnzZgM1yOn5FHRQflTc0BtQZBI1eEsJut0ek7veqVBoScLARFxcNr9BS0McYHB1l9sqwdm+ErADLFcxXi9K+guCF6E0TfnZtM510exQQMx1cYi/AExWXoYROHyefjlWDMCjAHHVVhAgFgElsBs3sTxZFGPEYGY+TH03jc+64AAnRB8hLS0jqpUjQXyQQCTGzKoTfxNmiqgMFJEm1aZw9wxJKxbdVXfcI2FAXgvHZ2Jw02/jloxC9iUgcvkFgNTuNyttvt2goLM4GI0u4XEBsWurcOyl7FJF6sNcMpP2/ixHStHmMBjqJ29OFIPLd7927NFrtTgKY4r4/aY+xHMHvX6/C3xUoTiERuO2gk8MudzxrrPS1Py8jIAO9jGj9nysao1s0VwEi7gLy9rf5DeFXvgFE/r1Qp95Z7FTmMTTI+jcPldWM1fGEQ9ZJ4EjfUe1Ts4L7XcUpooX5JittjFGSqAFxGjqnEHo/8/by5F//T0CznYQBbcUrcUHGWckGv8MXlsMmHfqacNiGMcFhe00Cchnk6PO8anRYNZ7GQ43B8B0tY+3YI/sG+wLVZk4BNM3pyTnJMJ6//JITop4XhMzjJxmwJNkpgNiZJDO4Gw94MrXUdxRyxCCZzP5c7/dQp+7lmd2qL2OzODkkcvNR420NMrwjwb6g0kLn5UlXNi8g1c1RxZjkGPxNfzHwGpqEBOr8tXsovqagJuvWaKkAw3vcPJZm0rtRdo+wDor38KY5M713/KXTcGKLbMyJ+0ErxuYyg6S7hqrwcy34rnDnN64ICX8S3g78O5cUJbZ4aW9v+mZYyohou5uOgTDSnvncsVswf8XV5icp5vam1ZUxq8ml0fhlgqonmwpZXjUoZ3m5PHllW39JijJgorMJUGt3u2anJw7Zj8GsB1FYtZnmHq7rOcCtUW8OuoxfNS2YfS5tzRsaiYVgKO4dZ2RWJIi/DPtdPbFeoS46ZhM/Ii5CXwVTqsa8Mg3FMgIzZgKeFyWK0dWzGpJ9E+77RsgLCBPcBIG9Seq7s43swsG4do/DusHYo6WWXu2ZLOE6HqEtMhzxAJbFhTX3oka9KTHoeg6m32DUsHPZuYiLP7m7wQt4DvQKMAxZ/KtNQWzXL7+OL4UCKq+84mJD49vAWBnwNd7dy/G3BwcT4xANWvxQ3yh8oD2hgQAMDGhjQwP+jBv4HMx1BB+p5W3gAAAAASUVORK5CYII=' ,text:'2',max:99},
          { title: '已结束', image:'data:image/png;base64,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', text: '12', max: 99 },
          { title: '草稿箱', image: 'data:image/png;base64,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', text: '2', max: 99 }
        ]}
        onClick={this.navigateToCategory.bind(this)}
        current={this.state.current}
        className='tab-list border-radius-12'
        selectedColor='#666666'
      />
    </View> : userIdentityRender =  <AtListItem className='top-line-item' hasBorder={false}  title='我的订单' arrow='right' onClick={this.navigateToMyOrder.bind(this)} /> ;
    return (
      <View className='profile-view'>
        <View className='profile-top-bg'></View>
        <View className='profile'>
        <AtList className='profile-info border-radius-12' hasBorder={false}>
          <AtAvatar className='profile-avatar' circle image={this.state.avatar} size='large'></AtAvatar>
          <View className='profile-actor' onClick={this.handleSwitchUserIdentity.bind(this)}>
            <AtTag
              name='actor'
              type='primary'
              circle
              size='small'
              active={true}>
              {this.state.userIdentity === 'buyer' ? '买家' : '商家'}
            </AtTag>
            <Text className='profile-switch'>点击切换</Text>
          </View>
          <AtListItem className='profile-name'
            title={this.state.nickName}
            extraText='查看'
            arrow='right'
            hasBorder={false}
          />
          <AtListItem hasBorder={false} iconInfo={{ size: 20, color: '#000', value: 'sketch', }} title='开通会员' arrow='right' />
        </AtList>

        <View className='profile-list bg-white mt-20 border-radius-12'>
          {userIdentityRender}
        </View>
        <View className='profile-list mt-20 bg-white border-radius-12'>
          <View className='profile-title'>常用功能</View>
          <View className='profile-feature-list'>
            <View className='profile-feature-item' onClick={this.navigateToGoodsList.bind(this)}>
              <View className='wrap-icon'>
                <View className='font-icon'>库</View>
              </View>
              <View className='text-icon'>商品库</View>
            </View>
            <View className='profile-feature-item' onClick={this.navigateToPartnership.bind(this)}>
              <View className='wrap-icon'>
                <View className='font-icon'>伴</View>
              </View>
              <View className='text-icon'>小伙伴</View>
            </View>
            <View className='profile-feature-item' onClick={this.navigateToPickUpSite.bind(this)}>
              <View className='wrap-icon'>
                <View className='font-icon'>点</View>
              </View>
              <View className='text-icon'>自提点</View>
            </View>
            <View className='profile-feature-item' onClick={this.navigateToDeliveryArea.bind(this)}>
              <View className='wrap-icon'>
                <View className='font-icon'>区</View>
              </View>
              <View className='text-icon'>配送区域</View>
            </View>
          </View>
        </View>
        <View className='new-group-buy'>
          <AtButton type='primary' onClick={this.handleNavToAddGroupBuy.bind(this)} circle>发布新团购</AtButton>
        </View>
        </View>
      </View>
    )
  }
}
