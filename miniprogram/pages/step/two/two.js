const db = wx.cloud.database()
Page({
  data: {
    latitude: 37.424477,
    longitude: 112.582784,
    markers: [{
      id: 1,
      latitude: 37.424477,
      longitude: 112.582784,
      name: '新生缴费地点',
      callout: {
        display: "ALWAYS",
        content: "新生缴费地点"
      }
    }],

  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad(e) {
    const self = this
    db.collection('step').doc("two").get({
      success: function (res) {
        self.setData({
          information: res.data
        })
      }
    })
  },

  moveToLocation: function () {
    wx.showModal({
      title: '温馨提示',
      content: '进入地图界面以后，请点击右下角绿色按钮，进行导航',
      success(res) {
        if (res.confirm) {
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function (res) {
              var latitude = res.latitude
              var longitude = res.longitude
              wx.openLocation({
                latitude: 37.424477,
                longitude: 112.582784,
                name: "山西农业大学-新生缴费点",
                scale: 15
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  }
})
