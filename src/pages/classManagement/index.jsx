import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import  api from "../../services/api";
import { View } from '@tarojs/components'
import { AtList, AtListItem,AtButton,AtIcon,AtPagination} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/textarea.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/pagination.scss";
import './index.less'

export default class Index extends Component {

  componentWillMount () {

  }
  componentDidMount(){}
  componentWillUnmount(){}
  componentDidShow () {
    this.getCategoriesLimit(this.state.currentPage,this.state.pageRows);
  }
  componentDidHide () {}
  constructor () {
    super(...arguments)
    this.state = {
      categories: '',
      description:'',
      currentPage:1,
      pageRows:5,
      total:0,
    }
  }
  getCategoriesLimit(page,rows){
    let params ={
      page:page,
      rows:rows
    }
    let limitList =  api.post('/categories/getCategoriesLimit',params,'application/json');
    Taro.showLoading({
      title: '加载中',
    })
    limitList.then((res)=>{
      console.log(res.data.length,res.data.page)
      this.setState({
        categories:res.data.data,
        total:res.data.length,
        currentPage:res.data.page,
      })
      Taro.hideLoading();
    }).catch((err)=>{
      Taro.hideLoading();
      Taro.showToast({
        title: err.errMsg,
        icon:'loading',
        duration: 2000
      })
    })

  }
  editCategory(value){
    let currentId =  value.target.dataset.id;
    Taro.navigateTo({
      url:`/pages/editClass/index?id=${currentId}`
    })
  }
  delCategory(value){
    let _this = this;
    Taro.showModal({
      title: '提示',
      content: '确认删除该类别吗？',
      success: function (res) {
        if (res.confirm) {
          let id =  value.target.dataset.id;
          let params={
            id:id
          }

          let delCat = api.put('/categories/deleteCategory',params,'application/json')
          delCat.then((res)=>{
           if (res.statusCode === 200){
             Taro.showToast({
               title: '删除成功',
               icon:'success',
               duration: 2000
             })
           }
           // 重新获取分类列表
           _this.getCategoriesLimit(_this.state.currentPage,_this.state.pageRows);

          }).catch((err)=>{
            Taro.showToast({
              title: err.errMsg,
              icon:'loading',
              duration: 2000
            })
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
  handlePageChange(value){
    this.getCategoriesLimit(value.current,this.state.pageRows)
  }
  navigateToAddClass(){
    Taro.navigateTo({
      url:'/pages/addClass/index'
    })
  }
  render () {
    const { categories } = this.state;
    const categoriesArray = Object.values(categories);

    let classList = <AtList className='categories-list'>
      {categoriesArray.map((category)=>{
        return <View className='bg-white mb-10'>
          <AtListItem hasBorder={false} title={category.name} note={category.description} />
          <View className='edit-bar default-flex'>
            {/*<View className='info-title default-flex'>*/}
              {/*<AtIcon className='mr-10' value='add-circle' size='20' color='#666'></AtIcon>*/}
              {/*添加子类目(0)*/}
            {/*</View>*/}
            <View className='info-title default-flex px-24 pb-20'>
              <AtIcon className='mr-10' value='shopping-bag' size='20' color='#666'></AtIcon>
              管理商品(0)
            </View>
            <View className='default-flex'>
              <View className='info-title px-24 pb-20' data-id={category._id}  onClick={this.editCategory.bind(this)}>
                <AtIcon className='mr-10' value='edit' size='20' color='#666'></AtIcon>
                编辑
              </View>
              <View className='info-title pb-20 px-24' data-id={category._id} onClick={this.delCategory.bind(this)}>
                <AtIcon className='mr-10' value='trash' size='20' color='#666'></AtIcon>
                删除
              </View>
            </View>
          </View>
        </View>
        })
      }
    </AtList>

    return (
      <view className='categories'>
        <View className='mt-20 mb-20'>
          {classList}
          <AtPagination
            icon
            total={this.state.total}
            pageSize={this.state.pageRows}
            current={this.state.currentPage}
            onPageChange={this.handlePageChange.bind(this)}
          >
          </AtPagination>
        </View>
        <View className='tab-btn-bottom'>
          <AtButton className='btn-flex-1' type='primary' circle onClick={this.navigateToAddClass.bind(this)}>添加新分类</AtButton>
        </View>
      </view>
    )
  }
}
