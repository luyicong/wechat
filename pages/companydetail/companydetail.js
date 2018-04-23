// pages/companydetail/companydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companydetail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '职位详情'
    });
    wx.showLoading({
      title: '玩命加载中',
      mask: true
    })
    wx.request({
      url: `https://talent.jsd618.com/api/v1/companyDetail/${options.id}`,
      success: (res) => {
        this.setData({
          companydetail: res.data.data
        })
        wx.hideLoading();
        
        console.log(this.data.companydetail)
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