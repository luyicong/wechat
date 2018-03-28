// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    this.getCollectList()
  },
  //获取收藏列表
  getCollectList() {
    wx.request({
      url: `http://talent.yoho167.com/api/v1/collectList/1`,
      success: (res) => {
        this.setData({
          collectList: res.data.data
        })
        console.log(this.data.collectList)
      }
    })
  },
  //取消收藏
  cancelCollect(e){
    // console.log(e.target.id)
    // return
    wx.request({
      url: `http://talent.yoho167.com/api/v1/cancelCollect?c_id=${e.target.id}`,
      success: (res) => {
        if(res.data.status){
          wx.showToast({
            title: '取消收藏成功',
            icon: 'none',
            duration: 2000
          })
          setTimeout(() => { this.getCollectList() },2000)
          
        }else{
          wx.showToast({
            title: '取消收藏失败',
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