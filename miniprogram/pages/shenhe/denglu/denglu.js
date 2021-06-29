var app = getApp();
const db = wx.cloud.database()

Page({

  data: {
    email: " ",
    password: "  "
  },
  //提交表单查询数据库判断
  login: function (event) {
    wx.navigateTo({
      url: '../../shenhe/shenhe',
    })
    /* console.log(event)
    const xuehao = event.detail.value.xuehao.toString()
    const mima = event.detail.value.mima.toString()
    console.log(xuehao)
    console.log(mima)
    db.collection('worker').where({
      xuehao: xuehao,
      mima: mima
    }).get({
      success: function (take) {
        console.log(take)
        if (take.data.length != 0) {
          wx.showModal({
            title: "工作人员登陆成功",
            success(res) {
              if (res.confirm) {
                app.globalData.workername=take.data[0].workername
                console.log(app.globalData.openid)
                console.log(take.data[0]._id)
                wx.cloud.callFunction({
                  name: 'addworker-openid',
                  data: {
                    id: take.data[0]._id,
                    openid: app.globalData.openid
                  },
                  success: res => {
                    wx.hideLoading()
                    wx.navigateTo({
                      url: '../../shenhe/shenhe',
                    })
                  },
                  fail: err => {
                  },
                  complete: () => {
                  }
                })
              }
            }
          });
        } else {
          wx.showModal({
            title: "登陆失败",
            content: "非工作人员请走其他通道！",
          });
        }
      }
    }) */
  },

  onLoad: function (options) {
    /* 设置barTitle */
    wx.setNavigationBarTitle({
      title: '工作人员登陆'
    })
    this.setData({
      marginTop: app.globalData.windowHeight / 10 * 6
    })
  }
})