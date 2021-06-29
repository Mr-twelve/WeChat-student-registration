// miniprogram/pages/article/xyy/xyy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 37.422120,
    longitude: 112.583300,
    markers: [{
      id: 1,
      latitude: 37.424673, 
      longitude: 112.578036,
      name: '山西农业大学西门公交站',
      callout: {
        display: "ALWAYS",
        content: "山西农业大学西门公交站"
      }
    }, {
      id: 2,
        latitude: 37.426539, 
        longitude: 112.590723,
      name: '山西农业大学北门公交站',
      callout: {
        display: "ALWAYS",
        content: "山西农业大学北门公交站"
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
                latitude: 37.424673,
                longitude: 112.578036,
                name: '山西农业大学西门公交站',
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
                latitude: 37.426539,
                longitude: 112.590723,
                name: '山西农业大学北门公交站',
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
      current: 'cloud://good-3mgiy.676f-good-3mgiy/校园生活/公交车.png', // 当前显示图片的http链接
      urls: ['cloud://good-3mgiy.676f-good-3mgiy/校园生活/公交车.png']
    })
  }
})
