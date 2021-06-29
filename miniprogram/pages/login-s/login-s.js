var app = getApp();
const db = wx.cloud.database()

Page({

  data: {
    email: " ",
    password: "  "
  },
  bindEmailInput: function (event) {
    this.setData({
      email: event.detail.value
    })
  },
  bindPasswordInput: function (event) {
    this.setData({
      password: event.detail.value
    })
  },
  //提交表单查询数据库判断
  login: function (event) {
    wx.navigateTo({
      url: 'sign/sign',
    })
    /* console.log(event)
    const sfz = event.detail.value.身份证号.toString()
    const mm = event.detail.value.密码.toString()
    console.log(sfz)
    console.log(mm)
    db.collection('newuser').where({
      考生号: sfz,
      出生日期: mm
    }).get({
      success: function (res) {
        if (res.data.length != 0) {
          var jiben = res.data[0]
          console.log(jiben)
          wx.showModal({
            title: "登陆成功",
            content: "欢迎来到最美农大,遇到更美好的自己",
            success(res) {
              wx.showLoading({
                title: '加载中',
              })
              if (res.confirm) {
                db.collection('have').where({
                  _openid: app.globalData.openid // 填入当前用户 openid
                }).get({
                  success: function (takeapp) {
                    console.log(takeapp.data.length)
                    app.globalData.have = takeapp.data.length
                    var have = takeapp.data.length
                    if (have == 0) {
                      wx.navigateTo({
                        url: 'sign/sign?jiben=' + jiben._id,
                      })
                      wx.hideLoading()
                    } if (have != 0) {
                      console.log(takeapp)
                      app.globalData.sushe = takeapp.data[0].宿舍
                      app.globalData.name = takeapp.data[0].姓名
                      app.globalData.banji = takeapp.data[0].专业班级
                      wx.switchTab({
                        url: '../step/step',
                      })
                      wx.hideLoading()
                    }
                  }
                })
              }
            }
          });
        } else {
          wx.showModal({
            title: "登陆失败",
            content: "请检查你的用户信息！",
          });
        }
      }
    }) */
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '新生登陆'
    })
    this.setData({
      marginTop: app.globalData.windowHeight / 10 * 6
    })
  }
})