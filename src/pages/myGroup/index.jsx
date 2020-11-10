import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View} from '@tarojs/components'
import { AtButton,AtTabs, AtTabsPane } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/tabs.scss";


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
    const tabList = [{ title: '全部' }, { title: '团购中' }, { title: '已结束' },{ title: '草稿箱' }]
    return (
      <View className='my-group'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleTabClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className='group-list'>
              <View className='group-card'>
                <View className='card-content'>
                  <View  className='group-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='group-info'>
                    <View className='title line-1-ellipsis'>1号亚超 11.7 首团1号亚超 11.7 首团1号亚超 11.7 首团1号亚超 11.7 首团1号亚超 11.7 首团</View>
                    <View className='des'>东南区团购黄金组合【Le crois】面包 & 【YUNIQUE 御黑堂】奶茶奶茶奶茶奶茶奶茶奶茶奶茶</View>
                    <View className='tool'>07/11/2020 创建 | 0 单</View>
                  </View>
                </View>
                <View className='card-bottom'>
                  <View className='status'>
                    <View className='status-on'>团购中</View>
                    {/*<View className='status-off'>已结束</View>*/}
                    {/*<View className='status-none'>草稿</View>*/}
                  </View>
                   <View className='card-btn'>
                     <AtButton type='primary' size='small' circle>预览</AtButton>
                     <AtButton  size='small' circle>修改</AtButton>
                     <AtButton  size='small' circle>复制</AtButton>
                     <AtButton  size='small' circle>删除</AtButton>
                   </View>
                </View>
              </View>

              <View className='group-card'>
                <View className='card-content'>
                  <View  className='group-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='group-info'>
                    <View className='title line-1-ellipsis'>1号亚超 11.7 首团</View>
                    <View className='des'>东南区团购黄金组合【Le crois】面包 & 【YUNIQUE 御黑堂】奶茶奶茶奶茶奶茶奶茶奶茶奶茶</View>
                    <View className='tool'>07/11/2020 创建 | 0 单</View>
                  </View>
                </View>
                <View className='card-bottom'>
                  <View className='status'>
                    {/*<View className='status-on'>团购中</View>*/}
                    <View className='status-off'>已结束</View>
                    {/*<View className='status-none'>草稿</View>*/}
                  </View>
                  <View className='card-btn'>
                    <AtButton type='primary' size='small' circle>预览</AtButton>
                    {/*<AtButton  size='small' circle>修改</AtButton>*/}
                    <AtButton  size='small' circle>复制</AtButton>
                    <AtButton  size='small' circle>删除</AtButton>
                  </View>
                </View>
              </View>

              <View className='group-card'>
                <View className='card-content'>
                  <View  className='group-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='group-info'>
                    <View className='title line-1-ellipsis'>1号亚超 11.7 首团</View>
                    <View className='des'>东南区团购黄金组合【Le crois】面包 & 【YUNIQUE 御黑堂】奶茶奶茶奶茶奶茶奶茶奶茶奶茶</View>
                    <View className='tool'>07/11/2020 创建 | 0 单</View>
                  </View>
                </View>
                <View className='card-bottom'>
                  <View className='status'>
                    {/*<View className='status-on'>团购中</View>*/}
                    {/*<View className='status-off'>已结束</View>*/}
                    <View className='status-none'>草稿</View>
                  </View>
                  <View className='card-btn'>
                    {/*<AtButton type='primary' size='small' circle>预览</AtButton>*/}
                    {/*<AtButton  size='small' circle>修改</AtButton>*/}
                    <AtButton  size='small' circle>复制</AtButton>
                    <AtButton  size='small' circle>删除</AtButton>
                  </View>
                </View>
              </View>

            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className='group-list'>

              <View className='group-card'>
                <View className='card-content'>
                  <View  className='group-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='group-info'>
                    <View className='title line-1-ellipsis'>1号亚超 11.7 首团</View>
                    <View className='des'>东南区团购黄金组合【Le crois】面包 & 【YUNIQUE 御黑堂】奶茶奶茶奶茶奶茶奶茶奶茶奶茶</View>
                    <View className='tool'>07/11/2020 创建 | 0 单</View>
                  </View>
                </View>
                <View className='card-bottom'>
                  <View className='status'>
                    <View className='status-on'>团购中</View>
                    {/*<View className='status-off'>已结束</View>*/}
                    {/*<View className='status-none'>草稿</View>*/}
                  </View>
                  <View className='card-btn'>
                    <AtButton type='primary' size='small' circle>预览</AtButton>
                    <AtButton  size='small' circle>修改</AtButton>
                    <AtButton  size='small' circle>复制</AtButton>
                    <AtButton  size='small' circle>删除</AtButton>
                  </View>
                </View>
              </View>

            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View className='group-list'>

              <View className='group-card'>
                <View className='card-content'>
                  <View  className='group-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='group-info'>
                    <View className='title line-1-ellipsis'>1号亚超 11.7 首团</View>
                    <View className='des'>东南区团购黄金组合【Le crois】面包 & 【YUNIQUE 御黑堂】奶茶奶茶奶茶奶茶奶茶奶茶奶茶</View>
                    <View className='tool'>07/11/2020 创建 | 0 单</View>
                  </View>
                </View>
                <View className='card-bottom'>
                  <View className='status'>
                    {/*<View className='status-on'>团购中</View>*/}
                    <View className='status-off'>已结束</View>
                    {/*<View className='status-none'>草稿</View>*/}
                  </View>
                  <View className='card-btn'>
                    <AtButton type='primary' size='small' circle>预览</AtButton>
                    {/*<AtButton  size='small' circle>修改</AtButton>*/}
                    <AtButton  size='small' circle>复制</AtButton>
                    <AtButton  size='small' circle>删除</AtButton>
                  </View>
                </View>
              </View>

            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View className='group-list'>

              <View className='group-card'>
                <View className='card-content'>
                  <View  className='group-picture' style={{
                    backgroundImage: "url(" + "https://restaurantden.com/wp-content/uploads/2017/09/stocksnap.jpg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></View>
                  <View className='group-info'>
                    <View className='title line-1-ellipsis'>1号亚超 11.7 首团</View>
                    <View className='des'>东南区团购黄金组合【Le crois】面包 & 【YUNIQUE 御黑堂】奶茶奶茶奶茶奶茶奶茶奶茶奶茶</View>
                    <View className='tool'>07/11/2020 创建 | 0 单</View>
                  </View>
                </View>
                <View className='card-bottom'>
                  <View className='status'>
                    {/*<View className='status-on'>团购中</View>*/}
                    {/*<View className='status-off'>已结束</View>*/}
                    <View className='status-none'>草稿</View>
                  </View>
                  <View className='card-btn'>
                    {/*<AtButton type='primary' size='small' circle>预览</AtButton>*/}
                    {/*<AtButton  size='small' circle>修改</AtButton>*/}
                    <AtButton  size='small' circle>复制</AtButton>
                    <AtButton  size='small' circle>删除</AtButton>
                  </View>
                </View>
              </View>

            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
