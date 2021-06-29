// miniprogram/pages/article/sksj/sksj.js
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

  viewimg(e){
    wx.previewImage({
      current: 'cloud://good-3mgiy.676f-good-3mgiy/校园生活/407ed17c84922b74b999a8bb247d9c7.jpg', // 当前显示图片的http链接
      urls: ['cloud://good-3mgiy.676f-good-3mgiy/校园生活/407ed17c84922b74b999a8bb247d9c7.jpg'] // 需要预览的图片http链接列表
    })
  }
})