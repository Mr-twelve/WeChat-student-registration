const db = wx.cloud.database()
Page({
  data: {
    information: null,
    latitude: 37.424060,
    longitude: 112.580520,
    //////////地图标记///////////////////////////
    markers: [{
      id: 1,
      latitude: 37.424060,
      longitude: 112.580520,
      name: '新生报到点',
      callout: {
        display: "ALWAYS",
        content: "新生报到点"
      }
    }],
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
  moveToLocation: function() {
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
                latitude: 37.424060,
                longitude: 112.580520,
                name: "山西农业大学-新生报到点",
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