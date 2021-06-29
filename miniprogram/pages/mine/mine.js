var app = getApp()
const db = wx.cloud.database()
Page({
  data: {},
  onLoad: function(options) {

  },
  onShow(e){
    const windowheight = app.globalData.windowHeight / 10 * 19;
    const all = app.globalData.windowHeight;
    var exp = app.globalData.banji;
    var ifjiazhang = app.globalData.jiazhang
    var self = this
    self.setData({
      daibantximg1: "cloud://test-mux64.7465-test-mux64-1259757584/示例照片/李佳瑾.jpg",
      daibanname1: "李佳瑾",
      daibantell1: "12345678999",
      daibantximg2: "cloud://test-mux64.7465-test-mux64-1259757584/示例照片/刘重庆.jpg",
      daibanname2: "刘重庆",
      daibantell2: "13593499436",
      zybj: "软件1810",
      name: "史浩昌",
      xuehao: "20181611449",
      sushe: "11#651-6",
      jiguan: "山西省忻州市",
      daoname: "韩敬敬老师",
      daoyuan: "13834970653",
      tximg: "cloud://test-mux64.7465-test-mux64-1259757584/示例照片/史浩昌.jpg",
      windowheight: windowheight,
      all: all,
      ifjiazhang: ifjiazhang
    })
    /* if (ifjiazhang == false) {
      wx.showLoading({
        title: '加载中',
      })
      var self = this
      switch (exp) {
        case '软件1810':
          var banji = 'rj1810'
          console.log(banji)
          break;
        case '软件1901':
          var banji = 'rj1901'
          console.log(banji)
          break;
        case '软件1902':
          var banji = 'rj1902'
          console.log(banji)
          break;
        case '软件1903':
          var banji = 'rj1903'
          console.log(banji)
          break;
        case '软件1904':
          var banji = 'rj1904'
          console.log(banji)
          break;
        case '软件1905':
          var banji = 'rj1905'
          console.log(banji)
          break;
        case '软件1906':
          var banji = 'rj1906'
          console.log(banji)
          break;
        case '软件1907':
          var banji = 'rj1907'
          console.log(banji)
          break;
        case '软件1908':
          var banji = 'rj1908'
          console.log(banji)
          break;
        case '软件1909':
          var banji = 'rj1909'
          console.log(banji)
          break;
        case '软件1910':
          var banji = 'rj1910'
          console.log(banji)
          break;
        case '软件1911':
          var banji = 'rj1911'
          console.log(banji)
          break;
        case '软件1912':
          var banji = 'rj1912'
          console.log(banji)
          break;
        case '软件1913':
          var banji = 'rj1913'
          console.log(banji)
          break;
        case '软件1914':
          var banji = 'rj1914'
          console.log(banji)
          break;
        case '软件1915':
          var banji = 'rj1915'
          console.log(banji)
          break;
        case '软件1916':
          var banji = 'rj1916'
          console.log(banji)
          break;
        case '软件1917':
          var banji = 'rj1917'
          console.log(banji)
          break;
        case '软件1918':
          var banji = 'rj1918'
          console.log(banji)
          break;
        case '大数据1901':
          var banji = 'sj1901'
          console.log(banji)
          break;
        case '智能1901':
          var banji = 'zn1901'
          console.log(banji)
          break;
        case '数媒1901':
          var banji = 'sm1901'
          console.log(banji)
          break;
        case '数媒1902':
          var banji = 'sm1902'
          console.log(banji)
          break;
      }
      console.log(banji)
      db.collection(banji).where({
        _openid: app.globalData.openid
      }).get({
        success: function (take) {
          console.log(take.data[0].专业班级)
          var daibanbanjixxx = take.data[0].专业班级
          db.collection('daiban').where({
            daiban: daibanbanjixxx
          }).get({
            success: function (res) {
              console.log(res.data)
              var message = take.data[0]
              self.setData({
                daibantximg1: res.data[0].tximg,
                daibanname1: res.data[0].name,
                daibantell1: res.data[0].tell,
                daibantximg2: res.data[1].tximg,
                daibanname2: res.data[1].name,
                daibantell2: res.data[1].tell,
                zybj: message.专业班级,
                name: message.name,
                xuehao: message.xuehao,
                sushe: message.宿舍,
                jiguan: message.籍贯,
                daoname:message.导员姓名,
                daoyuan:message.导员电话,
                tell: message.联系方式,
                tximg: message.xstximg,
                windowheight: windowheight,
                all: all,
                ifjiazhang: ifjiazhang
              })
              wx.hideLoading()
            }
          })
        }
      })
    } else {
      self.setData({
        ifjiazhang: ifjiazhang
      })
    } */
  },

  team: function(e) {
    wx.navigateTo({
      url: 'team/team',
    })
  },
  returna:function(e){
    db.collection('have').where({
      _openid: app.globalData.openid 
    }).get({
      success: function (res) {
        console.log(res.data.length)
        app.globalData.have = res.data.length
        app.globalData.jiazhang = false
        var have = res.data.length
        if (have == 0) {
          wx.navigateTo({
            url: '../first-login/first-login',
          })
        } if (have != 0) {
          console.log(res)
          app.globalData.sushe = res.data[0].宿舍
          app.globalData.name = res.data[0].姓名
          app.globalData.banji = res.data[0].专业班级
          wx.navigateTo({
            url: '../first-login/first-login',
          })
        }
      }
    })
  }
})