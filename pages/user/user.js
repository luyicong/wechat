// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{}
  },
  urlNavigateTo(opt) {
    // console.log(opt)
    wx.navigateTo({
      url: this.data.user.id ? `../${opt.target.id}/${opt.target.id}?uid=${this.data.user.id}` :'../login/login'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    wx.showLoading({
      title: '加载中',
      mask:true
    });
    wx.getStorage({
      key: 'user',
      success: (res)=>{
        console.log(res.data)
        this.setData({
          user: res.data
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 1000)
      }
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
  },
  //推出登录事件
  logout() {
    wx.removeStorage({
      key: 'user',
      success: (res)=> {
        console.log(res.data)
        wx.showToast({
          title: '退出成功！',
          duration: 2000
        })
        this.setData({
          user: {}
        })
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
    wx.getStorage({
      key: 'user',
      success: (res) => {
        console.log(res.data)
        this.setData({
          user: res.data
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 1000)
      }
    })
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