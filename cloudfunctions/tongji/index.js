// 统计集合所有数据
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  try {
    return await db.collection('tongji').doc('7fa58ce8-05f0-4581-a8c9-13e1cf3affc6').update({
      data: {
        goschool: event.total
      }
    })
  } catch (e) {
    console.error(e)
  }
}