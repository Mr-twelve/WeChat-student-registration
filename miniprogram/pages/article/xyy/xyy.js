// miniprogram/pages/article/xyy/xyy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 37.425020,
    longitude: 112.585570,
    markers: [{
      id: 1,
      latitude: 37.425020,
      longitude: 112.585570,
      name: '山西农业大学-校医院',
      callout: {
        display: "ALWAYS",
        content: "山西农业大学-校医院"
      }
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad(e) {
    
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
                latitude: 37.425020,
                longitude: 112.585570,
                name: "山西农业大学-校医院",
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
