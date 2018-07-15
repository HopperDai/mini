Page({

  data: {
    tags: ['推荐', '影视', '音乐', '搞笑', '娱乐', '生活', '科技', '体育'],
    // tags: [],
    left: 0,
    now: 0,
    list: [{
      title: '出生21天看量子论！扎克伯格不让女儿输在起跑线上',
      like: '1552',
      comment: '152',
      url: '/res/imgs/1.jpg'
    }, {
      title: '20岁女孩高考后外出打工失联 曾哭着打电话要钱',
      like: '1552',
      comment: '152',
      url: '/res/imgs/1.jpg'
    }, {
      title: '出生21天看量子论！扎克伯格不让女儿输在起跑线上',
      like: '141432',
      comment: '123',
      url: '/res/imgs/1.jpg'
    }, {
      title: '25岁小伙河道"抢救"挖掘机 被洪水冲走身亡',
      like: '2412412',
      comment: '324214',
      url: '/res/imgs/1.jpg'
    }, {
      title: '华裔向博物院捐北魏天王头像 流失多年云冈终回归',
      like: '312',
      comment: '312',
      url: '/res/imgs/1.jpg'
    }, {
      title: '四川一高校因更名延迟发毕业证 校方：已分批发放',
      like: '221',
      comment: '152',
      url: '/res/imgs/1.jpg'
    }]
  },

  onLoad: function(options) {
    wx.request({
      url: 'http://localhost:8080/tags',
      dataType: 'json',
      success: (res) => {
        console.log(this);
        this.setData({
          tags: res.data
        });
      },
      fail(err) {
        console.log('请求失败', err);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  fnClick(ev) {
    const target = ev.target;
    this.setData({
      left: target.offsetLeft,
      now: target.dataset.index
    });
  },
  takeVideo() {
    // 历史信息多一条，wx.navigateTo
    // 当前页面直接变，wx.redirectTo
    // 跟 redirectTo 很像，保留原页面，wx.switchTab

    wx.navigateTo({
      url: '/pages/video/video',
    });

    // 没有左上角的回退按钮
    // wx.redirectTo({
    //   url: '/pages/video/video',
    // });
  }
})