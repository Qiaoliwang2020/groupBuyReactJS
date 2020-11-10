export default {
  pages: [
    'pages/myGroup/index',
    'pages/login/index',
    'pages/profile/index',
    'pages/index/index',
    'pages/addGroupBuy/index',
    'pages/messages/index',
    'pages/orders/index',
    'pages/addClass/index',
    'pages/selectGoods/index',
    'pages/addGood/index',
    'pages/groupBuyDetail/index',
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
        text: '团购',
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
