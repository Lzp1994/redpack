// pages/puzzle24/puzzle.js
var timer = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowBegin: true,  //是否显示开始按钮，默认显示
    isShowPrev: false,  //是否显示预览按钮，默认隐藏
    second:0 ,       //计时器秒数，初始化为0
    num:9,
  },
  //初始化拼图
  drawImg:function(){
    
    var url = '/images/20180103112645.jpg'
    var ctx = wx.createCanvasContext('myCanvas');
    ctx.drawImage(url, 0, 0, 300, 300, 0, 0, 100, 100);
    ctx.drawImage(url, 100, 100, 300, 300, 100, 0, 100, 100);
    ctx.drawImage(url, 200, 200,300,300,100,100,100,100);
    ctx.draw()
 
    

  },
  //跳转到首页
  toIndex:function(){
    clearInterval(timer) //清除计时器
    wx.redirectTo({
      url: '../index/index',
    })
  },
  
  //点击开始挑战事件
  begin:function(){
    var that = this;
    var isShow = that.data.isShow;
    var second = that.data.second;
    that.setData({
      isShowPrev:true,
      isShowBegin:false
    })
    timer = setInterval(function(){  //计时器开始计时
      second = second+1;
      console.log('计时器：' + second)
      that.setData({
        second: second
      })
      
    }.bind(this),1000)
  },
  //查看原图
  prevPic:function(){
    var that = this;
    var imgUrl = that.data.imgUrl;
    wx.previewImage({
      current: '',
      urls: [imgUrl],
      success: function(res) {
        console.log('预览中。。。');
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //初始化图片
  loadImg:function(){
    var that = this;
    var imgUrl = that.data.imgUrl;
    wx.getImageInfo({
      src: imgUrl,
      success: function(res) {
        console.log('图片的宽：'+res.width);
        console.log('图片的高：' + res.height);
        var imgWidth = res.width;
        var imgHeight = res.height;
        that.setData({
          imgWidth: imgWidth,
          imgHeight: imgHeight
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('从puzzle24页面加载获得的图片路径：' + options.url);
    var imgUrl = options.url;
    this.setData({
      imgUrl: imgUrl
    })
    this.loadImg()
    this.drawImg()
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