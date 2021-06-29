// miniprogram/pages/article/rdwt/rdwt.js
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

  },

  dxsrd:function(e){
    wx.navigateTo({
      url: 'dxsrd/dxsrd',
    })
  },
  jzxj: function (e) {
    wx.navigateTo({
      url: 'jzxj/jzxj',
    })
  },
   tmyjs: function (e) {
    wx.navigateTo({
      url: 'tmyjs/tmyjs',
    })
  }
})