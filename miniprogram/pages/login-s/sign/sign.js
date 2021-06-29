var app = getApp()
const db = wx.cloud.database()
Page({
  data: {
    haveimg: false,
    img: null,
    jiben: null, //基本信息
    marginTop: 0,
  },
  onLoad: function(options) {
    var self = this
    const windowheight = app.globalData.windowHeight / 10 * 19;
    const all = app.globalData.windowHeight;
    db.collection('newuser').doc(options.jiben).get({
      success: function(res) {
        var exp = res.data.专业班级;
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
        console.log(options.jiben)
        self.setData({
          id: options.jiben,
          banji: banji,
          jiben: res.data,
          windowheight: windowheight,
          all: all
        })
      }
    })
    console.log(windowheight)
  },
  chooseImage(e) {
    var self = this
    console.log(self.data.img)
    wx.chooseImage({
      count: 1,
      sizeType: ['original'], //原图
      sourceType: ['album'], //相册
      success: res => {
        self.setData({
          img: res.tempFilePaths[0],
          haveimg: true
        })
      }
    })
  },
  //提交表单上传
  okk: function(options) {
    wx.switchTab({
      url: '../../step/step',
    })
    /* 
    app.globalData.name = this.data.jiben.姓名
    app.globalData.banji = this.data.jiben.专业班级
    app.globalData.sushe = this.data.jiben.宿舍
    console.log(this.data.banji)
    var id=this.data.id
    var tximg = this.data.img
    var jihebanji = this.data.banji
    var daoname = this.data.jiben.导员姓名
    var daoyuan = this.data.jiben.导员电话
    var syszd = this.data.jiben.生源所在地
    var csd = this.data.jiben.出生地
    var csrq = this.data.jiben.出生日期
    var banji = this.data.jiben.专业班级
    var name = this.data.jiben.姓名
    var xuehao = this.data.jiben.学号
    var shushe = this.data.jiben.宿舍
    var xinbie = this.data.jiben.性别
    var minzhu = this.data.jiben.民族
    var jiben = this.data.jiben
    var zzmm = this.data.jiben.政治面貌 //政治面貌
    var sfzh = options.detail.value.sfzh //身份证号
    var zjxy = options.detail.value.zjxy //宗教信仰
    var tell = options.detail.value.tell //联系方式
    var hometell = options.detail.value.hometell //母亲联系方式
    var yb = options.detail.value.yb //父亲联系方式
    var location = options.detail.value.location //家庭住址
    var jg = options.detail.value.jg //籍贯
    var homemessage = options.detail.value.homemessage //家庭情况简介
    if (sfzh.length == 18) {
    if (tximg != null) {
      if (tell.length == 11) {
        if (hometell.length == 11) {
          if (yb.length == 11) {
            if (location != "") {
              if (jg != "") {
                if (zjxy != "") {
                  if (homemessage != "") {
                    wx.showLoading({
                      mask: true,
                      title: '加载中',
                    })
                    wx.cloud.uploadFile({
                      cloudPath: '2019新生照片/' + banji + '/' + name + xuehao + '.png',
                      filePath: tximg,
                      success: tx => {
                        const xstximg = tx.fileID
                        console.log(xstximg)
                        db.collection(jihebanji).add({
                          data: {
                            time: null,
                            workername: null,
                            workeropenid: null,
                            ifgoschool: false,
                            xinbie: xinbie,
                            身份证号:sfzh,
                            宿舍: shushe,
                            xuehao: xuehao,
                            民族: minzhu,
                            name: name,
                            导员姓名: daoname,
                            导员电话: daoyuan,
                            专业班级: banji,
                            出生地: csd,
                            出生日期: csrq,
                            生源所在地: syszd,
                            宗教信仰: zjxy,
                            政治面貌: zzmm,
                            联系方式: tell,
                            母亲手机号: hometell,
                            父亲手机号: yb,
                            家庭住址: location,
                            籍贯: jg,
                            家庭情况简介: homemessage,
                            xstximg: xstximg
                          },
                          success: function(res) {
                            console.log(res)
                            db.collection('have').add({
                              data: {
                                宿舍: shushe,
                                姓名: name,
                                专业班级: banji,
                                学号: xuehao,
                              },
                              success: function(res) {
                                wx.cloud.callFunction({
                                  name: 'remove',
                                  data: {
                                    id:id
                                  },
                                  success: res => {
                                    wx.switchTab({
                                      url: '../../step/step',
                                    })
                                    wx.hideLoading()
                                  },
                                })
                              },
                              fail: console.error
                            })
                          },
                          fail: console.error
                        })
                      },
                      fail: err => {}
                    })
                  } else {
                    wx.showModal({
                      content: "请输入家庭情况简介",
                    });
                  }
                } else {
                  wx.showModal({
                    content: "请输入宗教信仰",
                  });
                }
              } else {
                wx.showModal({
                  content: "请输入籍贯",
                });
              }
            } else {
              wx.showModal({
                content: "请输入家庭住址",
              });
            }
          } else {
            wx.showModal({
              content: "请输入正确的父亲手机号",
            });
          }
        } else {
          wx.showModal({
            content: "请输入正确的母亲手机号",
          });
        }
      } else {
        wx.showModal({
          content: "请输入正确联系方式",
        });
      }
    } else {
      wx.showModal({
        content: "请添加1寸红底照片",
      });
    }
    } else {
      wx.showModal({
        content: "请输入正确身份证号",
      });
    }
   */
  }
})