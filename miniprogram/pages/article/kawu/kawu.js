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
      latitude: 37.423357,
      longitude: 112.583685,
      name: '中国建设银行ATM',
      callout: {
        display: "ALWAYS",
        content: "中国建设银行ATM"
      }
    }, {
        id: 2,
        latitude: 37.422980,
        longitude: 112.584800,
        name: '工商银行ATM',
        callout: {
          display: "ALWAYS",
          content: "工商银行ATM"
        }
      }, {
        id: 3,
        latitude: 37.421780,
        longitude: 112.587680,
        name: '中国银行ATM',
        callout: {
          display: "ALWAYS",
          content: "中国银行ATM"
        }
      }, {
        id: 4,
        latitude: 37.424150,
        longitude: 112.582010,
        name: '中国邮政储蓄银行ATM',
        callout: {
          display: "ALWAYS",
          content: "中国邮政储蓄银行ATM"
        }
      }, {
        id: 5,
        latitude: 37.422279,
        longitude: 112.585151,
        name: '山西农业大学卡务中心',
        callout: {
          display: "ALWAYS",
          content: "山西农业大学卡务中心"
        }
      }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad(e) {

  },

  moveToLocation0: function () {
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
                latitude: 37.423357,
                longitude: 112.583685,
                name: '中国建设银行ATM',
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
  moveToLocation1: function () {
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
                latitude: 37.422980,
                longitude: 112.584800,
                name: '工商银行ATM',
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
  moveToLocation2: function () {
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
                latitude: 37.421780,
                longitude: 112.587680,
                name: '中国银行ATM',
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
  moveToLocation3: function () {
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
                latitude: 37.424150,
                longitude: 112.582010,
                name: '中国邮政储蓄银行ATM',
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
  moveToLocation4: function () {
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
                latitude: 37.422279,
                longitude: 112.585151,
                name: '山西农业大学卡务中心',
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
  viewimg(e) {
    var imglist = this.data.imglist
    wx.previewImage({
      current: 'cloud://good-3mgiy.676f-good-3mgiy/校园生活/卡务.png', // 当前显示图片的http链接
      urls: ['cloud://good-3mgiy.676f-good-3mgiy/校园生活/卡务.png']
    })
  }
})
