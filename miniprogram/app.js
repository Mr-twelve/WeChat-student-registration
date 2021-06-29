//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'test-mux64',
        traceUser: true,
      })
    }
    //页面加载的过程中获取设备屏幕高度////////
    const windowHeight = wx.getSystemInfoSync().windowHeight;
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    console.log(windowWidth)
    this.globalData = {
      jiazhang : false,
      windowHeight: windowHeight,
      windowWidth: windowWidth
    }
    //获取openid
    var self = this
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        self.globalData.openid = res.result.openid
        const db = wx.cloud.database()
        //拿取判断have中是否有用户注册过
        db.collection('have').where({
          _openid: res.result.openid // 填入当前用户 openid
        }).get({
          success: function (res) {
            console.log(res.data.length)
            self.globalData.have = res.data.length
            var have = res.data.length
            if (have==0){

            } if (have != 0){
              console.log(res)
              self.globalData.sushe=res.data[0].宿舍
              self.globalData.name = res.data[0].姓名
              self.globalData.banji = res.data[0].专业班级
            }
          }
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })

  },
})