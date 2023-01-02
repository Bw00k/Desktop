const mysql = require("mysql");
const sql = reqire("./sql.js"); //sql쿼리문이 작성되어 있는 파일

const pool = mysql.createPool({
  //Pool생성
  connectionLimit: 10,
  host: "127.0.0.1",
});
