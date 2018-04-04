// pages/storeresume/storeresume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //姓名
    realname:'',
    //性别
    sex:'',
    //出生年月日
    birthy: '',
    //现居住地
    nowaddress: '',
    //目前状态
    workstate: '',
    //工作性质
    jobtype:'',
    //期待行业
    industry:'',
    //目前状态数据
    statusArr:[
      '目前已离职，可快速上岗',
      '目前在职，可考虑换新环境',
      '观望有好的机会再考虑',
      '目前暂无跳槽打算',
      '应届毕业生'
    ],
    jobTypeArr:[
      '全职',
      '兼职',
      '实习'
    ],
    //性别
    sexArr:[
      {
        name:'男',
        checked:false,
        value:'男'
      },
      {
        name: '女',
        checked: false,
        value: '女'
      }
    ]
  },
  //姓名
  realnameChange(e) {
    console.log(e)
    this.setData({
      realname: e.detail.value
    })
  },
  //性别改变
  sexChange(e) {
    console.log(e.detail.value)
    this.setData({
      sex: e.detail.value
    })
  },
  //日期选择
  timeChange(e) {
    console.log(e)
    this.setData({
      birthy: e.detail.value
    })
  },
  //城市选择
  addressChange(e) {
    console.log(e)
    this.setData({
        nowaddress: e.detail.value
    })
  },
  //目前状态改变
  statusChange(e) {
    console.log(e)
    this.setData({
        workstate: this.data.statusArr[e.detail.value]
    })
  },
  //工作性质改变
  jobTypeChange(e) {
    this.setData({
      jobtype: e.detail.value
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