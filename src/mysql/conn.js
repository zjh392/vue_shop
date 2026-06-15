import mysql from "mysql2/promise.js"
const connPool = mysql.createPool({
    host:"localhost",
    port:3307,
    database:"vue_shop",
    user:"root",
    password:"123456",
    connectionLimit:10
})
//测试连接
const testConn = async () => {
  try { 
    const [rows] = await connPool.excute("SELECT 1");
    console.log("数据库连接成功");
  } catch (err) {
    console.error("数据库连接失败 :", err.message);
    process.exit(1); // 连接失败退出进程
  }
};
testConn();

export default connPool