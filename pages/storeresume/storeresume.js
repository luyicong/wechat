// pages/storeresume/storeresume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      realname:'',
      sex:''
    },
    id:0,
    user_id:0,
    email:'',
    user_name:'',
    //姓名
    realname:'',
    //性别
    sex:'',
    //出生年月日
    birthy: '',
    //最高学历
    maxedu:'',
    //工作经验
    workexp:'',
    //现居住地
    nowaddress: '',
    //目前状态
    workstate: '',
    //工作性质
    jobtype:'',
    //期待行业
    industry:'',
    //期待职位
    position: '',
    //期待薪资
    salary:'',
    //工作地区
    workarea:'',
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
      realname: e.detail.value,
    })
    console.log(this.data.user)
  },
  //性别改变
  sexChange(e) {
    console.log(e.detail.value)
    this.setData({
      sex: e.detail.value,
    })
    console.log(this.data.sex)
  },
  //日期选择
  timeChange(e) {
    console.log(e)
    this.setData({
      birthy: e.detail.value
    })
  },
  //最高学历改变
  maxeduChange(e) {
    console.log(e)
    this.setData({
      maxedu: e.detail.value
    })
  },
  //工作经验改变
  workexpChange(e) {
    console.log(e)
    this.setData({
      workexp: e.detail.value
    })
  },
  //现居住地选择
  addressChange(e) {
    console.log(e)
    this.setData({
        nowaddress: e.detail.value.join(',')
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
    console.log(e.detail.value)
    this.setData({
      jobtype: this.data.jobTypeArr[e.detail.value]
    })
  },
  //期待行业
  industryChange(e) {
    console.log(e.detail.value)
    this.setData({
      industry: e.detail.value
    })
  },
  //期待职位
  positionChange(e) {
    console.log(e.detail.value)
    this.setData({
      position: e.detail.value
    })
  },
  //期待薪资
  salaryChange(e) {
    console.log(e.detail.value)
    this.setData({
      salary: e.detail.value
    })
  },
  //工作地区
  workareaChange(e) {
    console.log(e.detail.value)
    this.setData({
      workarea: e.detail.value
    })
  },
  //提交修改
  upDateResume() {
    let resumeData = {
      id:this.data.id,
      user_id: this.data.id,
      email: this.data.email,
      user_name: this.data.user_name,
      realname: this.data.realname,
      sex: this.data.sex,
      birthy: this.data.birthy,
      nowaddress: this.data.nowaddress,
      maxedu: this.data.maxedu,
      workexp: this.data.workexp,
      workstate: this.data.workstate,
      jobtype: this.data.jobtype,
      industry: this.data.industry,
      position: this.data.position,
      salary: this.data.salary,
      workarea: this.data.workarea
    }
    wx.request({
      url: `https://talent.yoho167.com/api/v1/upDateResume`,
      method:'POST',
      data: resumeData,
      success: (res) => {
        if (res.data.status) {
          wx.setStorage({
            key: "user",
            data: resumeData,
            success: () => {
              wx.showToast({
                title: '修改成功！',
                icon: 'success',
                duration: 2000
              })
              setTimeout(() => {
                wx.navigateBack()
              }, 2000)
            }
          })
        } else {
          wx.showToast({
            title: '修改失败',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getStorage({
      key: 'user',
      success: (res) => {
        console.log(res.data)
        this.setData({
          id:res.data.id,
          user_id:res.data.user_id,
          email: res.data.email,
          user_name:res.data.user_name,
          realname: res.data.realname,
          sex: res.data.sex,
          birthy: res.data.birthy,
          nowaddress: res.data.nowaddress,
          maxedu: res.data.maxedu,
          workexp: res.data.workexp,
          workstate: res.data.workstate,
          jobtype: res.data.jobtype,
          industry: res.data.industry,
          position: res.data.position,
          salary: res.data.salary,
          workarea: res.data.workarea
        })
        
        this.data.sexArr.forEach((item,index)=>{
          if (item.name === res.data.sex){
            var up = "sexArr[" + index + "].checked";//先用一个变量，把(info[0].gMoney)用字符串拼接起来
            this.setData({
              [up]:true
            })
          }
        })
        // setTimeout(function () {
        //   wx.hideLoading()
        // }, 1000)
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