import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text,Swiper, SwiperItem } from '@tarojs/components'
import { AtButton ,AtGrid, AtList, AtListItem,AtTag} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/grid.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/tag.scss";

import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onAddToFavorites() {

  }
  handleNavToOtherPages(){
    Taro.navigateTo({
      url:`/pages/groupBuyDetail/index`,
    })
  }


  render () {
    return (
      <View className='index'>
        <View className='fixed-top'>
        <Swiper
          className='swiper-index bg-white'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          autoplay>
          <SwiperItem>
            <View className='swiper-index-item'>
              <View className='swiper-image' style={{
                backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}></View>
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper-index-item'>
              <View className='swiper-image' style={{
                backgroundImage: "url(" + "https://www.rachelpaulsfood.com/wp-content/uploads/Slide1-7.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}></View>
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper-index-item'>
              <View className='swiper-image' style={{
                backgroundImage: "url(" + "https://image.shutterstock.com/mosaic_250/207628113/1470615731/stock-photo-japanese-sushi-food-maki-ands-rolls-with-tuna-salmon-shrimp-crab-and-avocado-top-view-of-1470615731.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}></View>
            </View>
          </SwiperItem>
        </Swiper>
        <View className='filter-bar bg-white'>
          <View className='filter-tab'>
            <View className='filter-address tab-item'>全墨尔本<text className='drop-down-icon'></text></View>
            <View className='filter-group tab-item'>全部团购<text className='drop-down-icon'></text></View>
            <View className='filter-sort tab-item'>默认排序<text className='drop-down-icon'></text></View>
          </View>
          {/*<View className='filter-content'>*/}
            {/*<View>*/}
              {/*<AtList>*/}
                {/*<AtListItem title='标题文字' onClick={this.handleClick} />*/}
              {/*</AtList>*/}
            {/*</View>*/}
            {/*<View>yyy</View>*/}
            {/*<View>hhhh</View>*/}
          {/*</View>*/}
        </View>
        {/*<navigator url="/pages/addClass/index" open-type="redirect">添加分类</navigator>*/}
        </View>
        <View className='card-list'>
          <View className='item-card' onClick={this.handleNavToOtherPages.bind(this)}>
            <View className='item-picture' style={{
              backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
              <View className='picture-bottom'>
                <View className='tags'>
                  <AtTag type='primary' size='small' active>首单优惠</AtTag>
                  <AtTag type='primary' size='small' active>积分抵扣</AtTag>
                  <AtTag type='primary' size='small' active>自提优惠</AtTag>
                  <AtTag type='primary' size='small' active>新品尝鲜价</AtTag>
                </View>
              </View>
            </View>
            <View className='card-bottom'>
              <View>
                <text className='card-title'>蛋糕+奶茶--10.7 派送/自取</text>
                <text className='card-address'>Glen Waverley  |  07/10/2020 </text>
              </View>
              <AtButton className='card-type' type='primary' size='small' circle>配送/自提</AtButton>
            </View>
          </View>

          <View className='item-card'>
            <View className='item-picture' style={{
              backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}>
              <View className='picture-bottom'>
                <View className='tags'>
                  <AtTag type='primary' size='small' active>首单优惠</AtTag>
                  <AtTag type='primary' size='small' active>积分抵扣</AtTag>
                  <AtTag type='primary' size='small' active>自提优惠</AtTag>
                  <AtTag type='primary' size='small' active>新品尝鲜价</AtTag>
                </View>
              </View>
            </View>
            <View className='card-bottom'>
              <View>
                <text className='card-title'>蛋糕+奶茶--10.7 派送/自取</text>
                <text className='card-address'>Glen Waverley  |  07/10/2020 </text>
              </View>
              <AtButton className='card-type' type='primary' size='small' circle>8/10人</AtButton>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
