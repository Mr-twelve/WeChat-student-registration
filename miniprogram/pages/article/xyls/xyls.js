// miniprogram/pages/article/xyls/xyls.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist: [
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image001.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image002.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image003.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image004.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image005.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image006.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image007.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image008.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image009.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image010.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image011.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image012.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image013.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image014.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image015.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image016.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image017.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image018.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image019.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image020.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image021.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image022.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image023.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image024.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image025.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image026.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image027.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image028.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image029.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image030.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image031.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image032.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image033.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image034.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image035.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image036.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image037.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image038.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image039.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image040.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image041.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image042.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image043.jpg",
      "cloud://test-mux64.7465-test-mux64-1259757584/校园生活/专任教师/l4k5_image044.jpg"
    ]
  },


  onLoad: function(options) {},

  viewimg(e) {
    var imglist = this.data.imglist
    wx.previewImage({
      current: e.target.id, // 当前显示图片的http链接
      urls: imglist
    })
  }
})