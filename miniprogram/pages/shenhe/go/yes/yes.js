const db = wx.cloud.database()
var app = getApp()
Page({

  data: {

  },

  onLoad: function(options) {
    var self=this
    var id = options.id
    var banji = options.banji
    db.collection(banji).doc(id).get({
      success: function (res) {
        self.setData({
          time:res.data.time,
          workername: res.data.workername,
          id:res.data._id,
          banji:banji,
          ifgoschool: res.data.ifgoschool,
          name:res.data.name,
          xstximg:res.data.xstximg,
          xuehao:res.data.xuehao
        })
        
      }
    })
  },
  shenhe(e){
    var self=this
    wx.showModal({
      title: '提示',
      content: '是否确定该同学到校？',
      success(res) {
        if (res.confirm) {
          self.quedin()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  quedin(){
    wx.showLoading({
      title: '加载中',
      mask:true,
    })
    console.log(app.globalData.workername)
    /* var workername = app.globalData.workername
    var workeropenid = app.globalData.openid */
    var workername = "工作人员01"
    var workeropenid ="100001"
    var id=this.data.id
    var banji=this.data.banji
    var time = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + '-' + new Date().getHours() + '-' + new Date().getMinutes()
    console.log(id)
    console.log(banji)
    wx.cloud.callFunction({
      // 要调用的云函数名称
      name: 'shenhe',
      // 传递给云函数的参数
      data: {
        id:id,
        time: time,
        banji: banji,
        workername:workername,
        workeropenid: workeropenid
      },
      success: res => {
        db.collection('tongji').doc('6eb9e838-9635-406c-83ab-4adc386ad903').get({
          success: function (res) {
            console.log(res.data.goschool)
            var total = res.data.goschool
            wx.cloud.callFunction({
              name: 'tongji',
              data: {
                total: total+1
              },
              success: res => {
                wx.hideLoading()
                wx.redirectTo({
                  url: '../../../shenhe/shenhe'
                })
              },
              fail: err => {
              },
              complete: () => {
              }
            })
          }
        })
      },
      fail: err => {
      },
      complete: () => {
      }
    })
  }

})