const db = wx.cloud.database()
Page({
  data: {
    information: null,
    latitude: 37.424060,
    longitude: 112.580520,
    //////////地图标记///////////////////////////
    markers: [{
        id: 1,
        latitude: 37.424208,
        longitude: 112.585935,
        name: '五号教学楼/崇信楼',
        callout: {
          display: "ALWAYS",
          content: "五号教学楼/崇信楼"
        }
      },
      {
        id: 2,
        latitude: 37.425056,
        longitude: 112.583570,
        name: '崇学楼',
        callout: {
          display: "ALWAYS",
          content: "崇学楼"
        }
      },
      {
        id: 3,
        latitude: 37.421491, 
        longitude: 112.580134,
        name: '崇实楼',
        callout: {
          display: "ALWAYS",
          content: "崇实楼"
        }
      }, {
        id: 4,
        latitude: 37.424895, 
        longitude: 112.582682,
        name: '分团委',
        callout: {
          display: "ALWAYS",
          content: "分团委"
        }
      },
      {
        id: 5,
        latitude: 37.424788,
        longitude: 112.586163,
        name: '四号楼/崇文楼',
        callout: {
          display: "ALWAYS",
          content: "四号楼/崇文楼"
        }
      }
    ],
    //////////////////////////////////////////////
  },
  onLoad(e) {
    const self = this
    db.collection('step').doc("one").get({
      success: function(res) {
        self.setData({
          information: res.data
        })
      }
    })
  },
  /////////////////////////////////////////////////////////////
  onReady: function(e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  moveToLocation0: function() {
    wx.showModal({
      title: '温馨提示',
      content: '进入地图界面以后，请点击右下角绿色按钮，进行导航',
      success(res) {
        if (res.confirm) {
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function(res) {
              var latitude = res.latitude
              var longitude = res.longitude
              wx.openLocation({
                latitude: 37.424208,
                longitude: 112.585935,
                name: "五号教学楼/崇信楼",
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
  moveToLocation1: function() {
    wx.showModal({
      title: '温馨提示',
      content: '进入地图界面以后，请点击右下角绿色按钮，进行导航',
      success(res) {
        if (res.confirm) {
          wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function(res) {
              var latitude = res.latitude
              var longitude = res.longitude
              wx.openLocation({
                latitude: 37.425056,
                longitude: 112.583570,
                name: "崇学楼",
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
                latitude: 37.421491,
                longitude: 112.580134,
                name: "崇实楼",
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
                latitude: 37.424895,
                longitude: 112.582682,
                name: "分团委",
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
                latitude: 37.424788,
                longitude: 112.586163,
                name: "四号楼/崇文楼",
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

export default {
  config: {
    usingComponents: {}
  },
  behaviors: [],
  properties: {
    steps: {
      type: Array,
      value: []
    },
    current: {
      type: Number,
      value: 0
    }
  },
  data: {},
  methods: {},
  attached() {}
}
/////////////////////////////////////////////////////////