// 工作人员登陆后更改openid，以保证下次点击不需要输入信息
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  try {
    return await db.collection('worker').doc(event.id).update({
      data: {
        _openid:event.openid
      }
    })
  } catch (e) {
    console.error(e)
  }
}