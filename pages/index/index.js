//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
  },
  //选择图片
  chooseImg:function(){
    wx.chooseImage({
      count: 1,
      sizeType: [],
      sourceType: [],
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        // console.log('图片路径：'+tempFilePaths)
        wx.redirectTo({
          url: '../cutInside/cutInside?url=' + tempFilePaths,
        })
      },
      fail: function(res) {},
      complete: function(res) {
        // var tempFilePaths = res.tempFilePaths
        // console.log('图片路径：' + tempFilePaths)
       
      },
    })
  },
  //跳转到红包记录
  toMyRecord:function(){
    wx.navigateTo({
      url: '../my-record5/record',
    })
  },
  //跳转到现金提现
  toWithdrawals: function () {
    wx.navigateTo({
      url: '../withdrawals6/withdrawals',
    })
  },
  //跳转到限时抢
  toAdvertisement: function () {
    wx.navigateTo({
      url: '../advertisement21/advertisement',
    })
  },
  //跳转到客服问题
  toQuestion: function () {
    wx.navigateTo({
      url: '../question7/question',
    })
  },
  //
  postData:function(){
    // console.log('postdata:' + app.globalData.userInfo.nickName);
    // var nickName = app.globalData.userInfo.nickName;
    var id = '1';
   wx.request({
     url: 'http://jun25th.cn/Company/project/Api/User/put?id='+id,
    //  data: {
    //    id:1
    //  },
    //  header: {
    //    'content-type': 'application/json'
    // },
    //  method: 'post',
    //  dataType: 'json',
     success: function(res) {
       console.log('res:' + res.data)
     },
     fail: function(res) {},
     complete: function(res) {},
   })
  },
  onLoad: function () {
    this.postData()
    console.log('用户信息：' + app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }else {
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})
