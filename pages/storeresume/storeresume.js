// pages/storeresume/storeresume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resume:{
      time: '',
      nowaddress: '',
      workstate: ''
    },
    statusArr:[
      '目前已离职，可快速上岗',
      '目前在职，可考虑换新环境',
      '观望有好的机会再考虑',
      '目前暂无跳槽打算',
      '应届毕业生'
    ]
  },
  //日期选择
  timeChange(e) {
    console.log(e)
    this.setData({
      resume:{
        time: e.detail.value
      }
    })
  },
  //城市选择
  addressChange(e) {
    console.log(e)
    this.setData({
      resume:{
        nowaddress: e.detail.value
      }
    })
  },
  //目前状态改变
  statusChange(e) {
    console.log(e)
    this.setData({
      resume:{
        workstate: this.data.statusArr[e.detail.value]
      }
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