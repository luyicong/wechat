// pages/deliverylist/deliverylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deliveryList:[],
    uid:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '投递列表'
    });
    console.log(options)
    this.setData({uid:options.uid})
    this.getDeliveryList();
  },
  //获取投递列表
  getDeliveryList() {
    wx.request({
      url: `http://talent.yoho167.com/api/v1/deliveryList/${this.data.uid}`,
      success:(res)=>{
        console.log(res.data)
        if (res.data.status){
          this.setData({
            deliveryList:res.data.data
          })
        }
      }
    })
  },
  //取消投递
  cancelDeliery(e) {
    console.log(e.target.id)
    wx.request({
      url: `http://talent.yoho167.com/api/v1/cancelDelivery?d_id=${e.target.id}`,
      success: (res)=>{
        if(res.data.status){
          wx.showToast({
            title: '取消投递成功',
            icon: 'none',
            duration: 2000
          })
          setTimeout(() => { this.getDeliveryList() }, 2000)
        }else{
          wx.showToast({
            title: '取消投递失败',
            icon: 'none',
            duration: 2000
          })
        }
      }
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