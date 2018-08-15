// pages/withdrawals6/withdrawals.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  //跳转到客服问题
  toQuestion: function () {
    wx.navigateTo({
      url: '../question7/question',
    })
  },
  //获取手机屏幕宽度
  getWidth: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowWidth);
        var TxLeft = (res.windowWidth - 22)
        that.setData({
          TxLeft: TxLeft
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWidth()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})