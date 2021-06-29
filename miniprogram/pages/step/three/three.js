const db = wx.cloud.database()
var app = getApp()
Page({
  data: {
    sushe: null,
    information: null,
    latitude: 37.420937,
    longitude: 112.590181,
    markers: [{
      id: 1,
      latitude: 37.420937,
      longitude: 112.590181,
      name: '新生宿舍',
      callout: {
        display: "ALWAYS",
        content: "新生宿舍"
      }
    }],

  },
  onLoad(e) {
    const self = this
    this.mapCtx = wx.createMapContext('myMap')
    self.setData({
      sushe: app.globalData.sushe,
      jiazhang: app.globalData.jiazhang,
    })
    db.collection('step').doc("three").get({
      success: function (res) {
        self.setData({
          sushe: app.globalData.sushe,
          jiazhang: app.globalData.jiazhang,
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
                latitude: 37.420796,
                longitude: 112.590128,
                name: "山西农业大学-男生宿舍",
                scale: 15
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  move: function () {
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
                latitude: 37.421832,
                longitude: 112.590331,
                name: "山西农业大学-女生宿舍",
                scale: 15
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  moveToLocation1: function (e) {
    var index = e.target.id
    const self = this;
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
                latitude: self.data.information.content[index].lat,
                longitude: self.data.information.content[index].lon,
                name: self.data.information.content[index].lname,
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