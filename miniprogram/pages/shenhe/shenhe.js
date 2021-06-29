const db = wx.cloud.database()
Page({

  data: {

  },
  onLoad: function (options) {
    var self=this
    db.collection('have').where({
    }).count({
      success: function (res) {
        db.collection('tongji').doc('7fa58ce8-05f0-4581-a8c9-13e1cf3affc6').get({
          success: function (take) {
            self.setData({
              sum: take.data.goschool,
              have: res.total
            })
          }
        })
      }
    })
  },
  go(e){
    console.log(e.target.id)
    wx.navigateTo({
      url: 'go/go?id=' + e.target.id,
    })
  }
})