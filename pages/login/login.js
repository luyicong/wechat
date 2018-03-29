// pages/login/login.js
var md5 = require('../../utils/md5.min.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },
  bindAcountInput (e) {
    this.setData({
      username: e.detail.value
    })
    console.log(e.detail.value)
  },
  bindPasswordInput (e) {
    this.setData({
      password: md5(e.detail.value)
    })
    console.log(e.detail.value)
  },
  loginEvent () {
    console.log(this.data.username)
    console.log(this.data.password)
    wx.request({
      url: `http://talent.yoho167.com/api/v1/login?user_name=${this.data.username}&password=${this.data.password}`,
      success: (res) => {
        if(res.data.status){
          wx.setStorage({
            key: "user",
            data: res.data.data,
            success:()=>{
              wx.showToast({
                title: '登录成功！',
                icon: 'success',
                duration: 2000
              })
              setTimeout(() => {
                wx.navigateBack()
              }, 2000)
            }
          })
        }else{
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  //注册
  regist() {
    wx.navigateTo({
      url: '../regist/regist'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(md5('11111111'))
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