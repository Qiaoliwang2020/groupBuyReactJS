import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import  api from "../../services/api";
import { base }from "../../services/config";
import { View, Picker } from '@tarojs/components'
import { AtInput,AtTextarea,AtDrawer,AtButton,AtList, AtListItem,AtIcon,AtImagePicker,AtRadio,AtToast,AtActionSheet, AtActionSheetItem,AtInputNumber,AtModal, AtModalHeader, AtModalContent, AtModalAction} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/textarea.scss";
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/image-picker.scss";
import "taro-ui/dist/style/components/radio.scss";
import "taro-ui/dist/style/components/drawer.scss";
import "taro-ui/dist/style/components/toast.scss";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/action-sheet.scss";
import "taro-ui/dist/style/components/input-number.scss";
import "taro-ui/dist/style/components/modal.scss";
import '../addGood/index.less';
import './index.less';

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      name: '',
      description:'',
      addUnit:false,
      unitName:'',
      unitSelector: '',
      unitValue:'',
      unitId:'',
      unitOptions:[],
      files: [],
      thumbs:[],
      showUploadBtn:true,
      originPrice:null,
      groupPrice:null,
      groupPriceStatus:false,
      unitPanel:false,
      warning:false,
      warningText:'',
      setStockSheet:false,
      defaultStock:'无限量',
      stock:999,
      categories:[],
      categoryId:'',
      categoryOptions:[],
      categoriesChecked:'全部',
      Submited:false,
    }
  }
  componentDidMount () {
    this.getCurrentGoods();
  }
  componentDidShow () {
    this.getCategories();
    this.getUnits();
  }
  getCategories=()=>{
    let params = {};
    let list = api.get('/categories/getCategories',params,'application/json');
    list.then((res)=>{
      if(res.statusCode === 200){
        let dataArray = res.data;
        let categoriesArray = dataArray.map((item)=>{
          return item.category;
        })
        this.setState({
          categories:dataArray,
          categoryOptions:categoriesArray
        })
      }
    }).catch((err)=>{
      console.log(err,'err')
    })
  }
  getCurrentGoods=()=>{
    let _this = this;
    let goodsId = Taro.getCurrentInstance().router.params.id;
    Taro.showLoading({
      title: '加载中',
    })
    let getGoods = api.get('/goods/getGoods',{goodsId:goodsId},'application/json');
    getGoods.then((res)=>{
      // get result
      let result = res.data.data;
      // figure out good's category
      let CategoryIndex = _this.state.categories.findIndex((category)=>{
        return category.id === result.categoryId
      })
      // figure out good's unit
      let unit = _this.state.unitOptions.find((unit) => unit.value === result.unitId);
      // display images
      let thumbs = result.thumbs.map((item)=>{
         return {url:`data:image/png;base64,${item.img}`,id:item.id}
      })
      // diasplay data
      _this.setState({
        name:result.name,
        description:result.description,
        categoryId:result.categoryId,
        categoriesChecked:_this.state.categoryOptions[CategoryIndex],
        unitSelector:result.unitId,
        unitValue:unit.label,
        unitId:result.unitId,
        originPrice:result.originalPrice,
        groupPrice:result.groupPrice ? result.groupPrice : null,
        groupPriceStatus:result.groupPrice ? true : false,
        stock:result.stock,
        files:thumbs
      })
      console.log(res.data.data,'res');
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
  handleNameChange=(name)=>{
    this.setState({
      name:name
    })
  }
  handleDescriptionChange =(des)=>{
    this.setState({
      description:des
    })
  }
  onUnitChange = value => {
    this.setState({
      unitSelector: value,
      warning:false,
      warningText:''
    })
  }
  handleOriginPriceChange = value =>{
    this.setState({
      originPrice: value
    })
  }
  onImageChange(files) {
    console.log(files,'files');
    this.setState({
      files
    })
    if(files.length===8){  // 最多三张图片 隐藏添加图片按钮
      this.setState({
        showUploadBtn:false
      })
    }else{
      this.setState({
        showUploadBtn:true
      })
    }
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }
  onImageUpload=(files,callback)=>{
    let thumbArray =[],_this = this;
    for(let i = 0;i<files.length;i++){
      Taro.uploadFile({
        url: 'http://192.168.0.102:3000/upload/uploadFile',
        filePath: files[i].url,
        header:{
          'content-type': 'multipart/form-data',
        },
        name: 'file',
        success: function (res){
          let dataObj = JSON.parse(res.data)
          // collect pictures
          thumbArray.push(dataObj);
          // callback
          callback(thumbArray,_this);
        }
      })
    }
  }
  onChangeCategories = e => {
    this.setState({
      categoriesChecked: this.state.categoryOptions[e.detail.value],
      categoryId:this.state.categories[e.detail.value].id
    })
  }
  openGroupPriceChange = e =>{
    this.setState({
      groupPriceStatus: e.detail.value,
      setStockSheet:false
    })
  }
  handleGroupPriceChange = value =>{
     this.setState({
       groupPrice:value
     })
  }
  // openSKUChange = e =>{
  //
  // }
  showUnitPanel =()=>{
    this.setState({
      unitPanel:true,
      setStockSheet:false,
    })
    this.getUnits();
  }
  getUnits =()=>{
    let getUnits = api.get('/units/getUnits');
    let units =[];
    getUnits.then((res)=>{
      units = res.data;
      let unitsArr = units.map(elm => ({label:elm.unit,value:elm.id}));
      this.setState({
        unitOptions:unitsArr
      })
    },(err)=>{
      Taro.showToast({
        title: err.errMsg,
        icon:'loading',
        duration: 2000
      })
    })
  }
  closeUnitPanel=()=>{
    this.setState({
      unitPanel:false,
    })
  }
  handleAddUnitStatus = () =>{
    this.setState({
      unitName:'',
      unitPanel:false,
      addUnit:!this.state.addUnit
    })
  }
  handleUnitNameChange = value =>{
    this.setState({
      unitName:value
    })
  }
  handleAddUnit = () =>{
    if (!this.state.unitName){
      Taro.showToast({
        title: '请输入单位名称',
        icon:'none',
        duration: 2000
      })
      return false;
    }
    let params = {
      name:this.state.unitName,
    }
    let addUnits =  api.post('/units/addUnit',params,'application/json')
    addUnits.then((res)=>{
      let initId = res.data.data.insertedId;
      console.log(initId,'res');
      if(res.statusCode === 200){
        Taro.showToast({
          title: '添加成功',
          icon:'success',
          duration: 2000
        })
        // close the modal
        this.handleAddUnitStatus();
        // open the units panel
        this.showUnitPanel();
      }
    }).catch((err)=>{
      Taro.showToast({
        title: err.errMsg,
        icon:'loading',
        duration: 2000
      })
    })
  }
  checkUnitChange =()=>{
    let unit ='';
    let selected = this.state.unitSelector;

    this.setState({
      warning:false,
      warningText:''
    })

    if (selected) {
      unit = this.state.unitOptions.find((unit) => unit.value === this.state.unitSelector);
      this.setState({
        unitPanel:false,
        unitValue:unit.label,
        unitId:unit.value
      })
    }
    else {
      this.setState({
        warning:true,
        warningText:'请选择一个单位'
      })
    }
  }
  handleSetStockSheet =()=>{
    this.setState({
      setStockSheet:!this.state.setStockSheet,
      unitPanel:false,
    })
  }
  setStockNone =()=>{
    this.setState({
      stock:999,
      setStockSheet:false,
    })
  }
  setStockNumber =(value)=>{
    this.setState({
      stock:value,
    })
  }
  addGoodsInfo(thumbs,_this){

    let {name,description,unitId,categoryId,originPrice,groupPrice,stock,files} = _this.state;
    let images =thumbs;

    let validObj = {
      '商品名称':name,
      '商品说明':description,
      '商品分类':categoryId,
      '单位':unitId,
      '原价':originPrice,
      '库存':stock
    }
    let errors = _this.VaidNull(validObj);
    if(errors.length>0){
      errors.forEach((item)=>{
        Taro.showToast({
          title:item,
          icon:'none',
          duration:2000
        })
      })
    }else{
      if(images.length === files.length){ // when pictures completed uploaded  
        let goods ={
          name:name,
          categoryId:categoryId,
          description:description,
          unitId :unitId,
          stock:stock,
          thumbs:images,
          originalPrice:originPrice,
          groupPrice:groupPrice,
          date:Date.now()
        }
        // set the submit button as disabled
        _this.setState({
          Submited:true
        })
        // post goods information to server 
        let createGoods = api.post('/goods/addGoods',goods,'application/json');
        createGoods.then((res)=>{
          if(res.statusCode == 200){
             // notice success
             Taro.showToast({
               title:'创建商品成功',
               icon:'success',
               duration:2000
             })
             // back to goods list page
             Taro.navigateTo({
              url:`/pages/goodsList/index`,
            })
          }
        },(err)=>{
          console.log(err,'err')
          // show error
          Taro.showToast({
            title: err.errMsg,
            icon:'loading',
            duration: 2000
          })
           // set the submit button as normal
          _this.setState({
            Submited:false
          })
        })
      }
    } 
  }

  submitGoodInfo =()=>{
    let {files} = this.state;
    if(files.length > 0){
      this.onImageUpload(files,this.addGoodsInfo);
    }else{
      Taro.showToast({
        title:'请先至少上传1张图片',
        icon:'none',
        duration:2000
      })
    } 
  }
  VaidNull=(obj)=>{
    let ValidValue = Object.keys(obj).map((key,index)=>{
       if(obj[key] === undefined || obj[key]==''){
        return `${key}是空的,请填写${key}值。`;
       }
    })
    let filtered = ValidValue.filter(function (el) {
      return el != null;
    });
    let errors = filtered.reverse();
    return errors;
  }
  render () {
    let warningEle = '';
    let gPriceStatus = this.state.groupPriceStatus;
    let gPrice = null;
    if (gPriceStatus){
      gPrice =  <AtInput
        name='groupPrice'
        title='团购价'
        type='digit'
        placeholder='请输入团购价'
        value={this.state.groupPrice}
        onChange={this.handleGroupPriceChange.bind(this)}
      />
    }

    if (this.state.warning){
      warningEle = <AtToast isOpened text={this.state.warningText} icon='close-circle'></AtToast>
    }
    let { showUploadBtn } =this.state
    return (
      <view className='add-good-container'>
        <View className='basic-info bg-white'>
          <View className='info-title'>
            <AtIcon value='shopping-bag' size='20'  className='mr-10'></AtIcon>
            基础信息
          </View>
          <AtList className='border-radius-12'>
            <AtInput
              name='name'
              title='商品名称'
              type='text'
              placeholder='请输入商品名称'
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
            />
            <Picker mode='selector' range={this.state.categoryOptions} onChange={this.onChangeCategories}>
              <AtListItem
                title='商品分类'
                extraText={this.state.categoriesChecked}
                arrow='right'
              />
            </Picker>
            <View className='textarea-title'>商品说明</View>
            <View className='px-12'>
              <AtTextarea
                value={this.state.description}
                maxLength={140}
                placeholder='请输入商品说明...'
                onChange={this.handleDescriptionChange.bind(this)}
              />
            </View>
            <AtListItem
              title='请选择单位'
              className='top-line-item'
              extraText={this.state.unitValue}
              onClick={this.showUnitPanel.bind(this)}
              arrow='right' />
            <AtListItem
              title='设置库存'
              arrow='right'
              extraText={this.state.stock === 999 ?this.state.defaultStock : this.state.stock}
              onClick={this.handleSetStockSheet.bind(this)}
            />
          </AtList>
        </View>
        <View className='basic-info bg-white mt-20'>
          <View className='info-title'>
            <AtIcon value='image' size='20'  className='mr-10'></AtIcon>
            商品图片（最多可添加8张）
          </View>
          <AtList className='border-radius-12 pt-20 pb-20'>
            <AtImagePicker
              length={4}
              files={this.state.files}
              onChange={this.onImageChange.bind(this)}
              onFail={this.onFail.bind(this)}
              onImageClick={this.onImageClick.bind(this)}
              showAddBtn={showUploadBtn}
            />
          </AtList>
        </View>
        <View className='basic-info bg-white mt-20'>
          <View className='info-title'>
            <AtIcon value='credit-card' size='20'  className='mr-10'></AtIcon>
            价格
          </View>
          <AtList className='border-radius-12'>
            <AtInput
              name='originPrice'
              title='商品价格'
              type='digit'
              placeholder='请输入商品价格'
              value={this.state.originPrice}
              onChange={this.handleOriginPriceChange.bind(this)}
              cursorSpacing={300}
              adjustPosition={true}
            />
            <AtListItem
              title='设置团购价'
              isSwitch
              switchColor='#FFD947'
              switchIsCheck={this.state.groupPriceStatus}
              onSwitchChange={this.openGroupPriceChange.bind(this)}
              cursorSpacing={300}
              adjustPosition={true}
            />
            {gPrice}
          </AtList>
        </View>
        <View className='submit-btn mt-40 pb-20'>
          <AtButton className='update-btn' type='primary' disabled={this.state.Submited} size='normal' circle='true' onClick={this.submitGoodInfo.bind(this)}>确认修改</AtButton>
          <AtButton className='cancel-btn' type='secondary' size='normal' circle='true'>取消</AtButton>
        </View>
        {warningEle}
        <AtActionSheet isOpened={this.state.setStockSheet} cancelText='确定' title='默认库存无限量至多999,或可点击输入库存' onCancel={ this.handleSetStockSheet.bind(this) }>
          <AtActionSheetItem onClick={this.setStockNone.bind(this)}>
            无限量 
          </AtActionSheetItem>
          <AtActionSheetItem>
            <AtInputNumber className='stock-num-input'
              min={0}
              max={999}
              step={1}
              value={this.state.stock}
              onChange={this.setStockNumber.bind(this)}
            />
          </AtActionSheetItem>
        </AtActionSheet>

        <AtDrawer
          show={this.state.unitPanel}
          onClose={this.closeUnitPanel.bind(this)}
          mask
          right
        >
          <View className='drawer-item'>
            <AtRadio
              options={this.state.unitOptions}
              value={this.state.unitSelector}
              onClick={this.onUnitChange.bind(this)}
            />
          </View>
          <View className='drawer-item'>
            <View className='px-32 mt-40'>
              <AtButton type='primary' size='small' circle onClick={this.checkUnitChange.bind(this)}>确认选择</AtButton>
            </View>
            <View className='px-32 mt-40'>
              <AtButton type='secondary' circle  size='small' onClick={this.handleAddUnitStatus.bind(this)}>
                <AtIcon value='add' size='16' />
                添加自定义单位
              </AtButton>
            </View>
          </View>
        </AtDrawer>

        <AtModal isOpened={this.state.addUnit}>
          <AtModalHeader>添加单位</AtModalHeader>
          <AtModalContent>
            <AtInput className={this.state.addUnit ? 'show' :' hide'}
              name='value'
              title='单位'
              type='text'
              placeholder='单位名称'
              value={this.state.unitName}
              onChange={this.handleUnitNameChange.bind(this)}
            />
          </AtModalContent>
          <AtModalAction>
            <button onClick={this.handleAddUnitStatus.bind(this)}>取消</button>
            <button onClick={this.handleAddUnit.bind(this)}>确定</button> </AtModalAction>
        </AtModal>
      </view>
    )
  }
}
