//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    nav: [{
      name: '首页',
      title: '仿优仔'
    }, {
      name: '我',
      title: '我的'
    }],
    now: 0,
    texunData: [{
      name: '特训1',
      su: 129,
      rediual: 129,
      imgUrl: '/resource/imgs/1.png'
    }, {
      name: '特训2',
      su: 100,
      rediual: 10,
      imgUrl: '/resource/imgs/1.png'
    }, {
      name: '特训3',
      su: 65,
      rediual: 90,
      imgUrl: '/resource/imgs/1.png'
    }, {
      name: '特训4',
      su: 300,
      rediual: 5,
      imgUrl: '/resource/imgs/1.png'
    }, {
      name: '特训5',
      su: 80,
      rediual: 33,
      imgUrl: '/resource/imgs/1.png'
    }]
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  upper: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  navigate({
    target
  }) {
    this.setData({
      now: target.dataset.index,
    });
    wx.setNavigationBarTitle({
      title: target.dataset.title
    });
  },
  toParentTx({
    currentTarget
  }) {
    wx.navigateTo({
      url: `/pages/texun/parents/parent?id=${currentTarget.dataset.name}`,
    });
  },
  onPullDownRefresh: function() {
    console.log('xiala');
    wx.stopPullDownRefresh();
  },

  onReachBottom: function() {
    console.log('上拉触底');
  }
})