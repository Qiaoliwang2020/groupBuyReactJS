export default {
  pages: [
    'pages/login/index',
    'pages/profile/index',
    'pages/myGroup/index',
    'pages/index/index',
    'pages/addGroupBuy/index',
    'pages/messages/index',
    'pages/addClass/index',
    'pages/selectGoods/index',
    'pages/addGood/index',
    'pages/groupBuyDetail/index',
    'pages/myOrder/index',
    'pages/goodsList/index',
    'pages/partner/index',
    'pages/pickUpSite/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    selectedColor: '#030303',
    borderStyle:'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '社区',
        iconPath: './static/img/icon/nav_activity@2x.png',
        selectedIconPath: './static/img/icon/nav_activity_pre@2x.png'
      },
      {
        pagePath: 'pages/messages/index',
        text: '消息',
        iconPath: './static/img/icon/nav_information@2x.png',
        selectedIconPath: './static/img/icon/nav_information_pre@2x.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: './static/img/icon/nav_user@2x.png',
        selectedIconPath: './static/img/icon/nav_user_pre@2x.png'
      }
    ]
  },
}
