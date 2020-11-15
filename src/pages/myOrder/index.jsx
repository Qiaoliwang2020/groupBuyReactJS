import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View,Text} from '@tarojs/components'
import { AtButton,AtTabs, AtTabsPane,AtIcon } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/tabs.scss";
import "taro-ui/dist/style/components/icon.scss";


import './index.less'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  componentWillMount () {

  }
  componentDidMount () {
    if(Taro.getCurrentInstance().router.params.current){
      let current = parseInt(Taro.getCurrentInstance().router.params.current);
      this.setState({
        current: current
      })
    }else {
      this.setState({
        current: 0
      })
    }
  }

  componentWillUnmount(){}
  componentDidShow () {}
  componentDidHide () {}

  handleTabClick (value) {
    this.setState({
      current: value
    })
  }



  render () {
    const tabList = [{ title: '全部' }, { title: '待付款' }, { title: '待收货' },{ title: '待自提' }]
    return (
      <View className='my-group'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleTabClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className='group-list'>
              <View className='group-card'>
                <View className='card-header'>
                  <View className='floor-num'>楼层号:24F</View>
                  <View className='order-info'>
                    <View className='organizer-info'>
                      <View className='organizer-avatar' style={{
                        backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}></View>
                      <View className='organizer-name'>陈小扁</View>
                    </View>
                    <View className='order-status'>
                      <View className='green'>已付款</View>
                      <View className='gray'>待配送</View>
                    </View>

                  </View>
                </View>
                <View className='card-content'>
                  <View  className='good-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='item-info'>
                    <View className='title line-1-ellipsis'>榴莲蛋糕盒子</View>
                    <View className='des'><View>A$11.00</View> <View>x1</View></View>
                  </View>
                </View>
                <View className='card-content'>
                  <View  className='good-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='item-info'>
                    <View className='title line-1-ellipsis'>芒果流心蛋糕</View>
                    <View className='des'><View>A$11.00</View> <View>x1</View></View>
                  </View>
                </View>
                <View className='tool'><Text className='gray'>优惠 A$0.00 |</Text><Text className='red'>实付款 A$8.80</Text></View>
                <View className='card-bottom'>
                  <View className='card-btn'>
                    <AtButton className='weChat-btn'  size='small' circle>
                      <image className='weChat' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyYWEwMDg1OC0wOGQ4LTRhN2YtYWQ4My0zNzZhNDMxZTEzOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUZDNzM1MjgxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZDNzM1MjcxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Y2Y5NWUzYzMtOWQ2My00YzliLWEzZDQtZmNhMTJjODBhNDI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJhYTAwODU4LTA4ZDgtNGE3Zi1hZDgzLTM3NmE0MzFlMTM5MiIvPiA8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"></image>
                      联系卖家
                    </AtButton>
                    <AtButton  size='small' circle><AtIcon className='mr-10' value='phone' size='18' color='#666'></AtIcon>拨打电话</AtButton>
                  </View>

                  <AtButton size='small' circle>
                    <AtIcon  className='mr-10' value='shopping-bag' size='18' color='#666'></AtIcon>
                    确认收货
                  </AtButton>
                </View>
              </View>

              <View className='group-card'>
                <View className='card-header'>
                  <View className='floor-num'>楼层号:28F</View>
                  <View className='order-info'>
                    <View className='organizer-info'>
                      <View className='organizer-avatar' style={{
                        backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}></View>
                      <View className='organizer-name'>王小新</View>
                    </View>
                    <View className='order-status'>
                      <View className='green'>已付款</View>
                      <View className='gray'>待自提</View>
                    </View>

                  </View>
                </View>
                <View className='card-content'>
                  <View  className='good-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='item-info'>
                    <View className='title line-1-ellipsis'>榴莲蛋糕盒子</View>
                    <View className='des'><View>A$11.00</View> <View>x1</View></View>
                  </View>
                </View>
                <View className='tool'><Text className='gray'>优惠 A$0.00 |</Text><Text className='red'>实付款 A$8.80</Text></View>
                <View className='card-bottom'>
                  <View className='card-btn'>
                    <AtButton className='weChat-btn'  size='small' circle>
                      <image className='weChat' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyYWEwMDg1OC0wOGQ4LTRhN2YtYWQ4My0zNzZhNDMxZTEzOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUZDNzM1MjgxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZDNzM1MjcxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Y2Y5NWUzYzMtOWQ2My00YzliLWEzZDQtZmNhMTJjODBhNDI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJhYTAwODU4LTA4ZDgtNGE3Zi1hZDgzLTM3NmE0MzFlMTM5MiIvPiA8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"></image>
                      联系卖家
                    </AtButton>
                    <AtButton  size='small' circle><AtIcon className='mr-10' value='phone' size='18' color='#666'></AtIcon>拨打电话</AtButton>
                  </View>
                  <AtButton size='small' circle>
                    <AtIcon  className='mr-10' value='shopping-bag' size='18' color='#333'></AtIcon>
                    确认收货
                  </AtButton>
                </View>
              </View>

              <View className='group-card'>
                <View className='card-header'>
                  <View className='floor-num'>楼层号:1F</View>
                  <View className='order-info'>
                    <View className='organizer-info'>
                      <View className='organizer-avatar' style={{
                        backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}></View>
                      <View className='organizer-name'>陈小扁</View>
                    </View>
                    <View className='order-status'>
                      <View className='red'>未付款</View>
                    </View>

                  </View>
                </View>
                <View className='card-content'>
                  <View  className='good-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='item-info'>
                    <View className='title line-1-ellipsis'>榴莲蛋糕盒子</View>
                    <View className='des'><View>A$11.00</View> <View>x1</View></View>
                  </View>
                </View>
                <View className='tool'><Text className='gray'>优惠 A$0.00 |</Text><Text className='red'>实付款 A$8.80</Text></View>
                <View className='card-bottom'>
                  <View className='card-btn'>
                    <AtButton className='weChat-btn'  size='small' circle>
                      <image className='weChat' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyYWEwMDg1OC0wOGQ4LTRhN2YtYWQ4My0zNzZhNDMxZTEzOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUZDNzM1MjgxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZDNzM1MjcxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Y2Y5NWUzYzMtOWQ2My00YzliLWEzZDQtZmNhMTJjODBhNDI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJhYTAwODU4LTA4ZDgtNGE3Zi1hZDgzLTM3NmE0MzFlMTM5MiIvPiA8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"></image>
                      联系卖家
                    </AtButton>
                    <AtButton  size='small' circle><AtIcon className='mr-10' value='phone' size='18' color='#666'></AtIcon>拨打电话</AtButton>
                  </View>
                  <AtButton size='small' circle>
                    <AtIcon  className='mr-10' value='credit-card' size='18' color='#333'></AtIcon>
                    付款
                  </AtButton>
                </View>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className='group-list'>

              <View className='group-card'>
                <View className='card-header'>
                  <View className='floor-num'>楼层号:1F</View>
                  <View className='order-info'>
                    <View className='organizer-info'>
                      <View className='organizer-avatar' style={{
                        backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}></View>
                      <View className='organizer-name'>陈小扁</View>
                    </View>
                    <View className='order-status'>
                      <View className='red'>未付款</View>
                    </View>

                  </View>
                </View>
                <View className='card-content'>
                  <View  className='good-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='item-info'>
                    <View className='title line-1-ellipsis'>榴莲蛋糕盒子</View>
                    <View className='des'><View>A$11.00</View> <View>x1</View></View>
                  </View>
                </View>
                <View className='tool'><Text className='gray'>优惠 A$0.00 |</Text><Text className='red'>实付款 A$8.80</Text></View>
                <View className='card-bottom'>
                  <View className='card-btn'>
                    <AtButton className='weChat-btn'  size='small' circle>
                      <image className='weChat' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyYWEwMDg1OC0wOGQ4LTRhN2YtYWQ4My0zNzZhNDMxZTEzOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUZDNzM1MjgxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZDNzM1MjcxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Y2Y5NWUzYzMtOWQ2My00YzliLWEzZDQtZmNhMTJjODBhNDI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJhYTAwODU4LTA4ZDgtNGE3Zi1hZDgzLTM3NmE0MzFlMTM5MiIvPiA8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"></image>
                      联系卖家
                    </AtButton>
                    <AtButton  size='small' circle><AtIcon className='mr-10' value='phone' size='18' color='#666'></AtIcon>拨打电话</AtButton>
                  </View>
                  <AtButton size='small' circle>
                    <AtIcon  className='mr-10' value='credit-card' size='18' color='#333'></AtIcon>
                    付款
                  </AtButton>
                </View>
              </View>

            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View className='group-list'>

              <View className='group-card'>
                <View className='card-header'>
                  <View className='floor-num'>楼层号:24F</View>
                  <View className='order-info'>
                    <View className='organizer-info'>
                      <View className='organizer-avatar' style={{
                        backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}></View>
                      <View className='organizer-name'>陈小扁</View>
                    </View>
                    <View className='order-status'>
                      <View className='green'>已付款</View>
                      <View className='gray'>待配送</View>
                    </View>

                  </View>
                </View>
                <View className='card-content'>
                  <View  className='good-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='item-info'>
                    <View className='title line-1-ellipsis'>榴莲蛋糕盒子</View>
                    <View className='des'><View>A$11.00</View> <View>x1</View></View>
                  </View>
                </View>
                <View className='card-content'>
                  <View  className='good-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='item-info'>
                    <View className='title line-1-ellipsis'>芒果流心蛋糕</View>
                    <View className='des'><View>A$11.00</View> <View>x1</View></View>
                  </View>
                </View>
                <View className='tool'><Text className='gray'>优惠 A$0.00 |</Text><Text className='red'>实付款 A$8.80</Text></View>
                <View className='card-bottom'>
                  <View className='card-btn'>
                    <AtButton className='weChat-btn'  size='small' circle>
                      <image className='weChat' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyYWEwMDg1OC0wOGQ4LTRhN2YtYWQ4My0zNzZhNDMxZTEzOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUZDNzM1MjgxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZDNzM1MjcxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Y2Y5NWUzYzMtOWQ2My00YzliLWEzZDQtZmNhMTJjODBhNDI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJhYTAwODU4LTA4ZDgtNGE3Zi1hZDgzLTM3NmE0MzFlMTM5MiIvPiA8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"></image>
                      联系卖家
                    </AtButton>
                    <AtButton  size='small' circle><AtIcon className='mr-10' value='phone' size='18' color='#666'></AtIcon>拨打电话</AtButton>
                  </View>
                  <AtButton size='small' circle>
                    <AtIcon  className='mr-10' value='shopping-bag' size='18' color='#333'></AtIcon>
                    确认收货
                  </AtButton>
                </View>
              </View>

            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View className='group-list'>

              <View className='group-card'>
                <View className='card-header'>
                  <View className='floor-num'>楼层号:28F</View>
                  <View className='order-info'>
                    <View className='organizer-info'>
                      <View className='organizer-avatar' style={{
                        backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}></View>
                      <View className='organizer-name'>王小新</View>
                    </View>
                    <View className='order-status'>
                      <View className='green'>已付款</View>
                      <View className='gray'>待自提</View>
                    </View>

                  </View>
                </View>
                <View className='card-content'>
                  <View  className='good-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='item-info'>
                    <View className='title line-1-ellipsis'>榴莲蛋糕盒子</View>
                    <View className='des'><View>A$11.00</View> <View>x1</View></View>
                  </View>
                </View>
                <View className='tool'><Text className='gray'>优惠 A$0.00 |</Text><Text className='red'>实付款 A$8.80</Text></View>
                <View className='card-bottom'>
                  <View className='card-btn'>
                    <AtButton className='weChat-btn'  size='small' circle>
                      <image className='weChat' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyYWEwMDg1OC0wOGQ4LTRhN2YtYWQ4My0zNzZhNDMxZTEzOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUZDNzM1MjgxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZDNzM1MjcxMjNEMTFFNEI1MERFQjkyRkM2NUIyOUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Y2Y5NWUzYzMtOWQ2My00YzliLWEzZDQtZmNhMTJjODBhNDI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJhYTAwODU4LTA4ZDgtNGE3Zi1hZDgzLTM3NmE0MzFlMTM5MiIvPiA8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"></image>
                      联系卖家
                    </AtButton>
                    <AtButton  size='small' circle><AtIcon className='mr-10' value='phone' size='18' color='#666'></AtIcon>拨打电话</AtButton>
                  </View>
                  <AtButton size='small' circle>
                    <AtIcon  className='mr-10' value='shopping-bag' size='18' color='#333'></AtIcon>
                    确认收货
                  </AtButton>
                </View>
              </View>

            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
