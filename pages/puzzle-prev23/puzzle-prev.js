// pages/puzzle-prev23/puzzle-prev.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x:0,
    y:0,
    num:9
  },
  drawCanvas:function(){
    var ctx = wx.createCanvasContext('myCanvas');
    var url = '/images/20180103112645.jpg'

    ctx.drawImage(url,0,0,600,600,0,0,200,200);
    ctx.draw()

  },
  // start:function(e){
  //   console.log(e)
  //   this.setData({
  //     x:e.touches[0].x,
  //     y:e.touches[0].y
  //   })
  // },
  // move: function (e) {
  //   console.log(e)
  //   this.setData({
  //     x: e.touches[0].x,
  //     y: e.touches[0].y
  //   })
  // },
  // end: function (e) {
    
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.drawCanvas()
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