//获取该班级所有人信息
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  console.log(event.banji)
  return await db.collection(event.banji).where({
  }).skip(0) // 跳过结果集中的前 10 条，从第 11 条开始返回
    .limit(100) // 限制返回数量为 10 条
    .get()
}