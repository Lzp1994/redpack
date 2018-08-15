// pages/question7/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // num: [0,1,2,3,4,5,6,7],//测试数组
    isShow:[0,0,0,0,0,0,0,0],  //0关闭、1打开
    questionList:[
      {
        id:0,
        question:'天天拼图怎么玩？',
        answer:'你可以设置一个带奖励的拼图PK，好友完成拼图才能领到奖励'
      },
      {
        id: 1,
        question: '我支付了但没有发出去？',
        answer: '请在主页我的记录中找到相应的记录，点击进入详情后点击【去转发】可把口令转发给好友或群，你也可以生成朋友圈分享图后发朋友圈'
      },
      {
        id: 2,
        question: '好友可以转发我的拼图PK吗？',
        answer: '可以的，您分享给好友或者转发到微信群的拼图PK，其他好友均可再次转发'
      },
      {
        id: 3,
        question: '发拼图PK会收取服务费吗？',
        answer: '发拼图PK会收取2%的服务费'
      },
      {
        id: 4,
        question: '未领取的金额会怎样处理？',
        answer: '未领取的金额将于24小时后退至【小程序】余额；同时，未领取金额的服务费将全部退回'
      },
      {
        id: 5,
        question: '如何提现到微信钱包？',
        answer: '在主页的【余额提现】或详情页的【去提现】均可跳转至余额提现页面进行提现，提现金额每次至少一元，每天至多提现3次'
      },
      {
        id: 6,
        question: '提现会收取服务费吗？多久到账？',
        answer: '提现不收取服务费，申请提现后会在1-5个工作日内转账到您的微信钱包'
      },
      {
        id: 7,
        question: '如何联系客服？（客服在线时间：9:00-23:00）',
        answer: '您可以点击本页面下方绿色按钮来联系我们的在线客服；您也可以拨打我们的客服电话：XXXX'
      },
    ]
  },
  showView:function(e){
    var that = this
    // console.log('id' + e.currentTarget.dataset.id)
    var num = e.currentTarget.dataset.id;
    var isShow = that.data.isShow
    // var num = that.data.questionList.id
    // console.log('id' + that.data.questionList[id])
    var len = that.data.questionList.length
    console.log('len' + len)
    if (isShow[num] == 0) {
      for(var n=0;n<len;n++){
        isShow[n] = 0;
      }
      isShow[num] = 1;
    }
    else{
      isShow[num] = 0;
    }
    console.log('isShow:' + isShow)
    that.setData({
      num: num,
      isShow: isShow
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
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})