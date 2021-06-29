const db = wx.cloud.database()
Page({
  data: {
    information: null,
    latitude: 37.422066,
    longitude: 112.585745,
    markers: [{
      id: 1,
      latitude: 37.422066,
      longitude: 112.585745,
      name: '食堂-谷园',
      callout: {
        display: "ALWAYS",
        content: "食堂-谷园"
      }
    }, {
        id: 2,
        latitude: 37.421201,
        longitude: 112.585353,
        name: '食堂-怡膳园',
        callout: {
          display: "ALWAYS",
          content: "食堂-怡膳园"
        }
      }, {
        id: 3,
        latitude: 37.421431,
        longitude: 112.591276,
        name: '食堂-碧桃园',
        callout: {
          display: "ALWAYS",
          content: "食堂-碧桃园"
        }
      },{
        id: 4,
        latitude: 37.424511,
        longitude: 112.580804,
        name: '食堂-教职工餐厅',
        callout: {
          display: "ALWAYS",
          content: "食堂-教职工餐厅"
        }
      }],

  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')

  },
  onLoad(e) {
    const self = this
    db.collection('step').doc("four").get({
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
                name: "山西农业大学-新生宿舍",
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