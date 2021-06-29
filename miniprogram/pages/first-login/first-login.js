var app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    userInfo: {},
    logged: false,
  },
  onLoad: function (options) {
    var self=this
    console.log(app.globalData.windowHeight)
    self.setData({
      marginTop: app.globalData.windowHeight / 10 * 4.5,
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              self.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  ///////根据身份跳转到不同的页面///////////
  onGetUserInfo: function (e) {
    console.log(e)
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        userInfo: e.detail.userInfo
      })
    }
  },
  /* 学生 */
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    var logged = e.detail.userInfo
    if (logged){
      wx.showLoading({
        title: '加载中',
      })
      this.newstudent()
    }else{
      wx.showToast({
        title: '授权以后才可以使用哦~',
        icon: 'none',
        duration: 1500
      })
    }
  },
  newstudent: function (e) {
    db.collection('have').where({
      _openid: app.globalData.openid // 填入当前用户 openid
    }).get({
      success: function (res) {
        console.log(res.data.length)
        app.globalData.have = res.data.length
        var have = res.data.length
        if (have == 0) {
          wx.navigateTo({
            url: '../login-s/login-s',
          })
          wx.hideLoading()
        } if (have != 0) {
          console.log(res)
          app.globalData.sushe = res.data[0].宿舍
          app.globalData.name = res.data[0].姓名
          app.globalData.banji = res.data[0].专业班级
          wx.switchTab({
            url: '../step/step',
          })
          wx.hideLoading()
        }
      }
    })
  },
  /* 家长 */
  bindGetUserInfojiazhang(e){
    console.log(e.detail.userInfo)
    var logged = e.detail.userInfo
    if (logged) {
      wx.showLoading({
        title: '加载中',
      })
      this.newparents()
    } else {
      wx.showToast({
        title: '授权以后才可以使用哦~',
        icon: 'none',
        duration: 1500
      })
    }
  },
  newparents: function (e) {
    app.globalData.jiazhang = true
    wx.switchTab({
      url: '../step/step',
    })
    wx.hideLoading()
  },
/* 工作 */
  bindGetUserInfogongzuo(e) {
    console.log(e.detail.userInfo)
    var logged = e.detail.userInfo
    if (logged) {
      this.gongzuo()
    } else {
      wx.showToast({
        title: '授权以后才可以使用哦~',
        icon: 'none',
        duration: 1500
      })
    }
  },
  gongzuo: function (e) {
    wx.showLoading({
      title: '加载中',
    })
    db.collection('worker').where({
      _openid:'00000'
      /* _openid: app.globalData.openid */
    }).get({
      success: function (res) {
        if(res.data.length!=0){
          app.globalData.workername = res.data[0].workername
          wx.hideLoading()
          wx.navigateTo({
            url: '../shenhe/shenhe',
          })
        }if(res.data.length==0){
          wx.hideLoading()
          wx.navigateTo({
            url: '../shenhe/denglu/denglu',
          })
        }
        console.log(res.data)
      }
    })
  },

})