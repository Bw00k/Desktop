const mysql = require("mysql"); //mysql 모듈 로드

//mysql 접속 정보
const conn = {
  host: "localhost",
  port: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
};
//let connection = mysql.createConnection(`mysql://hr:pass01@192.168.0.)
let connection = mysql.createConnection(conn); //DB커넥션 생성
connection.connect(); // DB 접속

//let sql = "update customers set ? where id=?";
//let data = [{ email: "aaa1@gmail.com", name: "기자1" }, 20];
let sql = "update customers set email=?, name=? where id=?";
let data = ["park@gmail.com", "park", 1];
connection.query(sql, data, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});
