// miniprogram/pages/shenhe/go/go.js
Page({

  data: {
    student:null
  },

  onLoad: function(options) {
    var banji=options.id
    var self = this
    switch (banji) {
      case 'rj1810':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1901':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1902':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1903':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1904':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1905':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1906':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1907':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1908':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1909':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1910':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1911':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1912':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1913':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'rj1914':
        var totalpeople = '50'
        console.log(totalpeople)
        break;
      case 'rj1915':
        var totalpeople = '50'
        console.log(totalpeople)
        break;
      case 'rj1916':
        var totalpeople = '50'
        console.log(totalpeople)
        break;
      case 'rj1917':
        var totalpeople = '50'
        console.log(totalpeople)
        break;
      case 'rj1918':
        var totalpeople = '50'
        console.log(totalpeople)
        break;
      case 'sj1901':
        var totalpeople = '51'
        console.log(totalpeople)
        break;
      case 'zn1901':
        var totalpeople = '53'
        console.log(totalpeople)
        break;
      case 'sm1901':
        var totalpeople = '50'
        console.log(totalpeople)
        break;
      case 'sm1902':
        var totalpeople = '50'
        console.log(totalpeople)
        break;
    }

    this.setData({
      totalpeople: totalpeople,
      banji: banji
    })
    wx.showLoading({
      title: '加载中',
    })
  },
  onShow:function(e){
    this.shuaxin()
  },
  shuaxin: function (options){
    var self = this
    var banji = this.data.banji
    wx.cloud.callFunction({
      name: 'getbanji',
      data: {
        banji: banji,
      },
      success: res => {
        console.log(res)
        var student= res.result.data
        var sum=0
        student.forEach(function (element) {
          if (element.ifgoschool==true){
            sum++
          }
        })
        self.setData({
          sum:sum,
          havenumber: res.result.data.length,
          banji: banji,
          student: student
        })
        wx.hideLoading()
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
      },
      fail: err => {
      },
      complete: () => {
      }
    })
  },
  yes(e){
    var banji=this.data.banji
    var id = e.currentTarget.id
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: 'yes/yes?id=' + id+'&&banji='+banji,
    })
  },
  onPullDownRefresh: function () {
    wx.showLoading({
      title: '刷新中...',
    })
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.shuaxin()
  },
})