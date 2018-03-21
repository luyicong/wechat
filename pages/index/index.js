//index.js
//获取应用实例
const app = getApp()
let _this
Page({
  data: {
    // imgUrls: [
    //   'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    //   'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    // ],
    // indicatorDots: true,
    // autoplay: true,
    // interval: 2000,
    // duration: 800,
    // indicatColor:'rgba(0,0,0,0.4)',
    // indicatotActiveColor:'#009ee5',
    // cates:[{id:1},{id:2},{id:3},{id:1},{id:5},{id:6},{id:7},{id:8}]
    posList:[],
    nowPage:1
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '../list/list'
    })
  },
  //打开详情页事件
  openDetail() {
    wx.showModal({
      title: '提示',
      content: '功能正在开发中。。。',
      confirmColor:'#009ee5',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  getIndexData:function(e){
    _this = this
    wx.request({
      url: `http://talent.yoho167.com/api/v1/position?nowPage=${this.nowPage}`,
      success:(res)=>{
        this.setData({
          posList: res.data.data
        })
        console.log(this.data.posList)
      }
    })
  },
  //监听页面加载
  onLoad: function () {
    this.getIndexData()
  },
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
