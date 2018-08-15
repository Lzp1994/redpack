// pages/create-puzzle3/create-puzzle.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    items:[
      { value:'3*3' },
      { value: '4*4', checked: 'true'},
      { value: '5*5' }
    ],
    tit:[
      {'title':'谁能拼出这张图1'},
      { 'title': '谁能拼出这张图2' },
      { 'title': '谁能拼出这张图3' },
      { 'title': '谁能拼出这张图4' },
      { 'title': '谁能拼出这张图5' },
      { 'title': '谁能拼出这张图6' },
      { 'title': '谁能拼出这张图7' },
    ],
    isShow:false,
    status:true
  },
  //显示弹框
  showMod:function(){
    var isShow = this.data.isShow;
    this.setData({
      isShow: true
    })
    
  },
  //隐藏弹框
  hideMod: function () {
    var isShow = this.data.isShow;
    this.setData({
      isShow: false
    })

  },
  //获取到title标题
  getTitle:function(e){
    console.log(e.target.dataset.value)
    var value = e.target.dataset.value;
    var that = this;
    var status = that.data.status;
    that.setData({
      value: value,
      status:false
    })
    that.hideMod()
  },
  //跳转到首页
  toIndex: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  },
  //弹出框
  showView:function(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //获取输入框输入金额
  getMoney:function(e){
    console.log('得到输入框输入金额：'+e.detail.value)
    var money = e.detail.value;
    this.setData({
      money: money
    })
  },
  //获取输入框输入红包个数
  getNum: function (e) {
    console.log('得到输入框输入个数：' + e.detail.value)
    var playNum = e.detail.value;
    this.setData({
      playNum: playNum
    })
  },
  //单选框改变事件
  radioChange: function (e) {
    console.log(e)
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  //支付功能,调用微信支付接口
  pay:function(res){
    var that = this;
    console.log('获得红包个数'+that.data.playNum)
    console.log('获得红包金额' + that.data.money)
    var money = that.data.money; //红包金额
    var playNum = that.data.playNum;  //红包个数

    console.log('pay获得图片路径：' + that.data.imgUrl)
    var imgUrl = that.data.imgUrl;
    wx.redirectTo({
      url: '../puzzle24/puzzle?url=' + imgUrl,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('从剪切页面获取到的图片路径：'+options.url)
    var imgUrl = options.url;
    this.setData({
      imgUrl: imgUrl
    })
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