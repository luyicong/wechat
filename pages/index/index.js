//index.js
//获取应用实例
const app = getApp()
let _this
Page({
  data: {
    posList:[],
    nowPage:1
  },
  //事件处理函数
  bindViewTap: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '../list/list'
    })
  },
  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh () {
    console.log('11111')
    this.getIndexData()
  },
  //打开详情页事件
  openDetail(e) {
    console.log(e)
    wx.navigateTo({
      url: '../positiondetail/positiondetail'
    })
  },
  getIndexData (e) {
    wx.request({
      url: `https://talent.jsd618.com/api/v1/position?nowPage=${this.data.nowPage}`,
      success:(res)=>{
        this.setData({
          posList: res.data.data
        })
        setTimeout(()=>{
          wx.stopPullDownRefresh()
        },600)
        
      }
    })
  },
  //监听页面加载
  onLoad: function () {
    this.getIndexData()
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
