// pages/positiondetail/positiondetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    isApply:false,
    isCollect:false,
    star: '../../images/star.png',
    active_star:'../../images/start_active.png',
    uid:0
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
      mask:true
    })
    wx.request({
      url: `https://talent.jsd618.com/api/v1/positionDetail/${options.id || 14}`,
      success: (res) => {
        this.setData({
          detail: res.data.data
        })
        wx.hideLoading();
        wx.getStorage({
          key: 'user',
          success: (res) => {
            console.log(res.data)
            this.setData({
              uid: res.data.id
            })
            wx.request({
              url: `https://talent.jsd618.com/api/v1/checkCollect?user_id=${res.data.id}&pos_id=${this.data.detail.pos_id}`,
              success:(res)=>{
                if(res.data.status){
                  this.setData({
                    isCollect: true
                  })
                }
              }
            })
            wx.request({
              url: `https://talent.jsd618.com/api/v1/checkDelivery?user_id=${res.data.id}&pos_id=${this.data.detail.pos_id}`,
              success: (res) => {
                if(res.data.status){
                  this.setData({
                    isApply: true
                  })
                }
              }
            })
          }
        })
        // console.log(this.data.detail)
      }
    })
  },
  //投递简历
  apply() {
    if (this.data.uid){
      if (this.data.isApply) return false
      wx.request({
        url: `https://talent.jsd618.com/api/v1/deliveryPosition?user_id=${this.data.uid}&pos_id=${this.data.detail.pos_id}`,
        method:'POST',
        success: (res)=>{
          if (res.data.status){
            wx.showToast({
              title: '申请成功！',
              icon: 'success',
              duration: 2000
            })
            this.setData({
              isApply: true
            })
          }
        }
      })
    }else{
      this._AlertModal()
    }
  },
  //收藏职位
  addCollect() {
    if (this.data.uid) {
      if (this.data.isCollect) return false
      wx.request({
        url: `https://talent.jsd618.com/api/v1/collectPos?user_id=${this.data.uid}&pos_id=${this.data.detail.pos_id}`,
        method: 'POST',
        success: (res) => {
          if (res.data.status) {
            wx.showToast({
              title: '收藏成功！',
              icon: 'success',
              duration: 2000
            })
            this.setData({
              isCollect: true
            })
          }
        }
      })
    } else {
      this._AlertModal()
    }
  },

  //弹出登录确认框
  _AlertModal() {
    wx.showModal({
      title: '温馨提示',
      content: '您还没登录，去登录？',
      confirmColor: '#009ee5',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    wx.hideLoading()
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