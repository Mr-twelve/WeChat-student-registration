// miniprogram/pages/article/lxshd/lxshd.js
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  Exentbindtap:  function(e) {
    wx.navigateTo({
      url: 'cgxsylb/cgxsylb',
    })
  },
  viewimg(e) {
    var imglist = this.data.imglist
    wx.previewImage({
      current: 'cloud://good-3mgiy.676f-good-3mgiy/出国学生一览表/出国学生一览表1.png', // 当前显示图片的http链接
      urls: ['cloud://good-3mgiy.676f-good-3mgiy/出国学生一览表/出国学生一览表1.png']
    })
  },
  viewimg1(e) {
    var imglist = this.data.imglist
    wx.previewImage({
      current: 'cloud://good-3mgiy.676f-good-3mgiy/出国学生一览表/新西兰海外生活.jpg', // 当前显示图片的http链接
      urls: ['cloud://good-3mgiy.676f-good-3mgiy/出国学生一览表/新西兰海外生活.jpg']
    })
  }
})