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
  componentDidShow () {
     this.getCategories();
     this.getAllGoods();
  }
  constructor () {
    super(...arguments)
    this.state = {
      search: '',
      categories:[],
      goodsList:[],
      categoryGoodsList:[],
      categoryCurrent: 0,
      subCurrent:0,
    }
  }
  handleIndexClick (value) {
    let _this = this;
    let categoryId = this.state.categories[value].id;
    if(value === 0 && categoryId == ''){
      _this.getAllGoods();
    }else{
      Taro.showLoading({
        title: '加载中',
      })
      let getCategoryGoods = api.get('/goods/getGoods',{categoryId:categoryId},'application/json');
      getCategoryGoods.then((res)=>{
        console.log(res.data.data,'res');
        _this.setState({
          categoryGoodsList:res.data.data
        })
        Taro.hideLoading();
      },(err)=>{
        Taro.hideLoading();
        // show error
        Taro.showToast({
          title: err.errMsg,
          icon:'loading',
          duration: 2000
        })
        console.log(err,'err');
      })
    }
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
      url:'/pages/classManagement/index'
    })
  }
  navigateToAddgood(){
    Taro.navigateTo({
      url:'/pages/addGood/index'
    })
  }
  getCategories=()=>{
    let params = {};
    let all = {title:'全部',id:''}; // set all category
    // get categories
    let list = api.get('/categories/getCategories',params,'application/json');
    list.then((res)=>{
      // if success
      if(res.statusCode === 200){
        let dataArray = res.data;
        // change data as new array which suitable for tablist
        let categoriesArray = dataArray.map((item)=>{
          return {title:item.category,id:item.id};
        })
        // add all at the first position of category array
        categoriesArray.unshift(all);
        // set categories
        this.setState({
          categories:categoriesArray
        })
      }
    }).catch((err)=>{
      // show error
      Taro.showToast({
        title: err.errMsg,
        icon:'loading',
        duration: 2000
      })
      console.log(err,'err')
    })
  }

  getAllGoods=()=>{
    let _this = this;
    let getAllGoods = api.get('/goods/getGoods',{},'application/json');
    Taro.showLoading({
      title: '加载中',
    })
    getAllGoods.then((res)=>{
      _this.setState({
        goodsList:res.data.data
      })
      Taro.hideLoading();
    }).catch((err)=>{
      Taro.hideLoading();
      // show error
      Taro.showToast({
        title: err.errMsg,
        icon:'loading',
        duration: 2000
      })
      console.log(err,'err');
    })
  }
  editGoods=(value)=>{
    let currentId =  value.target.dataset.id;
    Taro.navigateTo({
      url:`/pages/editGoods/index?id=${currentId}`
    })
  }

  render () {
    let {categories,goodsList,categoryGoodsList} = this.state;
    let renderGoods =  <View> 
      {goodsList.map((goods)=>{
         return <View className='goods-card'>
         <image className='goods-pic' src={'data:image/png;base64,'+goods.thumbs[0].img} mode='aspectFill'></image>
         <View className='goods-detail'>
           <View className='goods-title line-1-ellipsis'>{goods.name}</View>
           <View className='goods-detail-bottom'>
             <View className='goods-price'>${goods.originalPrice}</View>
             <View className='goods-status'>
               <View className='edit mr-20' data-id={goods._id} onClick={this.editGoods.bind(this)}>编辑</View>
               <View className='del'>删除</View>
             </View>
           </View>
         </View>
       </View>
      })}
      </View>
     let renderCategoryGoods = <View> 
      {categoryGoodsList.map((goods)=>{
          return <View className='goods-card'>
          <image className='goods-pic' src={'data:image/png;base64,'+goods.thumbs[0].img} mode='aspectFill'></image>
          <View className='goods-detail'>
            <View className='goods-title line-1-ellipsis'>{goods.name}</View>
            <View className='goods-detail-bottom'>
              <View className='goods-price'>${goods.originalPrice}</View>
              <View className='goods-status'>
                <View className='edit mr-20' data-id={goods._id} onClick={this.editGoods.bind(this)}>编辑</View>
                <View className='del'>删除</View>
              </View>
            </View>
          </View>
        </View>
      })}
     </View>
    let TabPanes =categories.map((c,i)=>{
      return <AtTabsPane className='goods-list' current={this.state.categoryCurrent} index={i}>
       {i === 0 ? renderGoods : renderCategoryGoods}
    </AtTabsPane>
    })
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
            animated={false}
            tabList={this.state.categories}
            key={new Date().getTime()}
            onClick={this.handleIndexClick.bind(this)}>
              {TabPanes}
              {/* <View className='sub-category-tab'>
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
              </View> */}
               {/* {renderGoods}
               {renderCategoryGoods} */}
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
