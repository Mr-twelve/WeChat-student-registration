//新生到校后确认更改相应班级集合中的数据到校
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  try {
    return await db.collection(event.banji).doc(event.id).update({
      data: {
        time: event.time,
        workername:event.workername,
        workeropenid: event.workeropenid,
        ifgoschool: true
      }
    })
  } catch (e) {
    console.error(e)
  }
}