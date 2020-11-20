import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View,Text,Swiper, SwiperItem } from '@tarojs/components'
import { AtButton ,AtAvatar,AtIcon, AtList, AtListItem,AtTag,AtTabs, AtTabsPane } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/grid.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/tag.scss";
import "taro-ui/dist/style/components/tabs.scss";
import "taro-ui/dist/style/components/avatar.scss";
import "taro-ui/dist/style/components/icon.scss";

import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  constructor () {
    super(...arguments)
    this.state = {
      current: 1,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  onAddToFavorites() {

  }
  handleNavToOtherPages(){
    Taro.navigateTo({
      url:`/pages/groupBuyDetail/index`,
    })
  }


  render () {
    const tabList = [{ title: '关注' }, { title: '首页' }, { title: '拼团' }]
    return (
      <View className='index'>
        <AtTabs className='index-tab' current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View>
              <View className='no-data'>
                <View className='no-data-icon' />
                还没有关注任何人哦～
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View>
              <View className='bg-white mb-10 mt-10'>
                <View className='question-card bg-white'>
                  <AtTag className='question-tag' size='small'  type='primary' active={true}>置顶</AtTag>
                  <View className='question-title'>社区怎么玩，点这里小团来教你。</View>
                </View>
                <View className='question-card bg-white'>
                  <AtTag className='question-tag' size='small'  type='primary' active={true}>置顶</AtTag>
                  <View className='question-title'>拼团社区大V招募啦！</View>
                </View>
              </View>
              <View className='hot-question bg-white mt-10'>
                <View className='hot-item line-1-ellipsis'>#拼团打卡</View>
                <View className='hot-item line-1-ellipsis'>#11月请对我好一点</View>
                <View className='hot-item line-1-ellipsis'>#少吃一点点肉肉，肉肉肉肉肉肉肉肉肉肉肉肉</View>
                <View className='hot-item line-1-ellipsis'>#拼团打卡</View>
                <View className='hot-item line-1-ellipsis'>#11月请对我好一点</View>
                <View className='hot-item line-1-ellipsis'>#少吃一点点肉肉，肉肉肉肉肉肉肉肉肉肉肉肉</View>
              </View>
              <View className='post-list bg-white mt-10'>
                 <View className='post-item'>
                   <View className='item-top'>
                     <AtAvatar image='https://jdc.jd.com/img/200' size='small' circle></AtAvatar>
                     <View className='item-content'>
                       <View className='default-flex'>
                         <View>
                           <View className='font-28'>王小心</View>
                           <View className='font-26 gray'>16小时前</View>
                         </View>
                         <AtButton className='follow-btn' type='primary' size='small' circle>关注</AtButton>
                       </View>
                     </View>
                   </View>
                   <View className='item-text'>
                     <View>写点什么把什么把什么把，写什么呢呢嗯嗯</View>
                     写点什么把什么把什么把，写什么呢呢嗯嗯
                     写点什么把什么把什么把，写什么呢呢嗯嗯
                     写点什么把什么把什么把，写什么呢呢嗯嗯 写点什么把什么把什么把，写什么呢呢嗯嗯
                     写点什么把什么把什么...<Text className='full-text'>全文</Text>
                   </View>
                   <View className='item-pic-list'>
                     <View className='item-pic' style={{
                       backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                       backgroundPosition: 'center',
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat'
                     }}></View>
                     <View className='item-pic' style={{
                       backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                       backgroundPosition: 'center',
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat'
                     }}></View>
                     <View className='item-pic' style={{
                       backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                       backgroundPosition: 'center',
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat'
                     }}></View>
                     <View className='item-pic' style={{
                       backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                       backgroundPosition: 'center',
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat'
                     }}></View>
                   </View>
                   <View className='item-bottom'>
                     <View><AtIcon value='external-link' size='16' color='#666'></AtIcon> 0</View>
                     <View><AtIcon value='message' size='18' color='#666'></AtIcon> 0</View>
                     <View><AtIcon value='heart' size='18' color='#666'></AtIcon> 0</View>
                   </View>
                 </View>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <Swiper
              className='swiper-index bg-white mt-10'
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
                      <AtTag type='primary' size='small' active>15公里以内均可配送</AtTag>
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
                      <AtTag type='primary' size='small' active>仅City地区</AtTag>
                      <AtTag type='primary' size='small' active>积分抵扣</AtTag>
                      <AtTag type='primary' size='small' active>自提优惠</AtTag>
                      <AtTag type='primary' size='small' active>新品尝鲜价</AtTag>
                    </View>
                  </View>
                </View>
                <View className='card-bottom'>
                  <View>
                    <text className='card-title'>蛋糕+奶茶--10.7 派送</text>
                    <text className='card-address'>Melbourne City  |  07/10/2020 </text>
                  </View>
                  <AtButton className='card-type' type='primary' size='small' circle>10单起配送</AtButton>
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
                    <text className='card-title'>蛋糕+奶茶--10.7 派送</text>
                    <text className='card-address'>Melbourne City  |  07/10/2020 </text>
                  </View>
                  <AtButton className='card-type' type='primary' size='small' circle disabled>已结束</AtButton>
                </View>
              </View>
            </View>
          </AtTabsPane>
        </AtTabs>
        {/*<View className='fixed-top'>*/}

        {/*/!*<navigator url="/pages/addClass/index" open-type="redirect">添加分类</navigator>*!/*/}
        {/*</View>*/}

      </View>
    )
  }
}
