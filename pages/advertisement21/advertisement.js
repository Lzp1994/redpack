// pages/advertisement21/advertisement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:[1,2,3,4,5,6,7,8,9],
    list:[
      {'userName':'小明','companyName':'王老吉'},
      { 'userName': '张三', 'companyName': '百度' },
      { 'userName': '李四', 'companyName': '美团' },
      { 'userName': '王五', 'companyName': '加多宝' },
    ]
  },
  toAdDetail:function(){
    wx.navigateTo({
      url: '../ad-detail22/ad-detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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