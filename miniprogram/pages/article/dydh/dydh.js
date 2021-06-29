// miniprogram/pages/article/dydh/dydh.js
Page({
  data: {
    imgUrls: ['cloud://test-mux64.7465-test-mux64-1259757584/校园生活/1.jpg',
      'cloud://test-mux64.7465-test-mux64-1259757584/校园生活/2.jpg',
      'cloud://test-mux64.7465-test-mux64-1259757584/校园生活/3.jpg',
      'cloud://test-mux64.7465-test-mux64-1259757584/校园生活/4.png',
      'cloud://test-mux64.7465-test-mux64-1259757584/校园生活/5.jpg',
    ]
  },

  onLoad: function(options) {
  },
  lq: function(e) {
     wx.navigateTo({
      url: 'xiangqin/xiangqin?id='+e.currentTarget.id,
    }) 
  },
  lanqiu(e){
    wx.navigateTo({
      url: 'lq/lq',
    }) 
  },
  viewimg(e){
     wx.previewImage({
       current: e.currentTarget.id, 
       urls: this.data.imgUrls
    }) 
  }
})