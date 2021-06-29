// 删除new中信息
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  try {
    return await db.collection('newuser').doc(event.id).remove()
  } catch (e) {
    console.error(e)
  }
}