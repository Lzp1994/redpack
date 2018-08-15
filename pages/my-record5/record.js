// pages/my-record/record.js
//获取应用实例
import myUrl from "../../utils/url"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    currentTab:0,
    num:[0,1]
  },
  //获取红包列表
  getRedPacket:function(){
    wx.request({
      url: myUrl.getRpList,
    })
  },
  //跳转到客服问题
  toQuestion: function () {
    wx.navigateTo({
      url: '../question7/question',
    })
  },
  //选项卡选中函数
  selected:function(e){
    // console.log(e.currentTarget.dataset.curr)
    var cur = e.currentTarget.dataset.curr
    this.setData({
      currentTab:cur
    })
    
  },
  //swiper的bindchange事件
  bc:function(e){
    // console.log(e.detail.current)
    var index = e.detail.current;
    this.setData({
      currentTab:index
    })
  },
  //获取到手机屏幕的高度
  getWidth:function(){
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.info(res.windowHeight);
        console.info(res.windowHeight-65);
        var spHeight = (res.windowHeight - 70)*2
        that.setData({
          spHeight: spHeight
        })
      },
    })
  },
  get:function(){
    var id ='1'
    wx.request({
      url: 'http://jun25th.cn/Company/project/Api/User/get?id='+id,
      success: function(res) {
        console.log('res:' + res.data)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWidth()
    this.get()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } 
    else {
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