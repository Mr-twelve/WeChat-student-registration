// miniprogram/pages/article/xyy/xyy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 37.422386, 
    longitude: 112.586589,
    markers: [{
      id: 1,
      latitude: 37.422386,
      longitude: 112.586589,
      name: '洗浴-康馨苑',
      callout: {
        display: "ALWAYS",
        content: "洗浴-康馨苑"
      }
    }, {
      id: 2,
        latitude: 37.421210,
        longitude: 112.585340,
        name: '开水房-怡膳园北侧',
      callout: {
        display: "ALWAYS",
        content: "开水房-怡膳园北侧"
      }
    }, {
      id: 3,
        latitude: 37.422230, 
        longitude: 112.588850,
        name: '开水房-体育场北侧',
      callout: {
        display: "ALWAYS",
        content: "开水房-体育场北侧"
      }
      }, {
        id: 4,
        latitude: 37.421768, 
        longitude: 112.591571,
        name: '开水房-碧桃园北侧',
        callout: {
          display: "ALWAYS",
          content: "开水房-碧桃园北侧"
        }
      }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad(e) {

  },
  viewimg(e) {
    wx.previewImage({
      current: 'cloud://good-3mgiy.676f-good-3mgiy/校园生活/洗浴.png', // 当前显示图片的http链接
      urls: ['cloud://good-3mgiy.676f-good-3mgiy/校园生活/洗浴.png'] // 需要预览的图片http链接列表
    })
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
                latitude: 37.422386,
                longitude: 112.586589,
                name: '洗浴-康馨苑',
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
                latitude: 37.421210,
                longitude: 112.585340,
                name: '开水房-怡膳园北侧',
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
                latitude: 37.422230,
                longitude: 112.588850,
                name: '开水房-体育场北侧',
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
                latitude: 37.421768,
                longitude: 112.591571,
                name: '开水房-碧桃园北侧',
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
