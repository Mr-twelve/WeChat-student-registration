var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.jiazhang)
  },

  //////////////热点监控//////////////////////
one:function(e){
  wx.navigateTo({
    url: 'one/one'
  })
},

two: function (e) {
    wx.navigateTo({
      url: 'two/two'
    })
  },

  three: function (e) {
    wx.navigateTo({
      url: 'three/three'
    })
  },

  four: function (e) {
    wx.navigateTo({
      url: 'four/four'
    })
  },


  ///////////////////////////////////////////

})