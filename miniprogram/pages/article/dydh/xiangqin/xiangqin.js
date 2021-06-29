const db = wx.cloud.database()
Page({
  data: {

  },
  onLoad: function (options) {
    var self=this
    db.collection('schoollife').where({
     id:options.id
    }).get({
      success: function (res) {
        self.setData({
          context: res.data[0]
        })
        console.log(res.data[0])
      }
    })
  },

})