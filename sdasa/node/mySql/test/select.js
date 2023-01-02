const mysql = require("mysql"); //mysql 모듈 로드

//mysql 접속 정보
const conn = {
  host: "localhost",
  port: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
};
let data = {
  name: "기자",
  email: "aaa@gmail.com",
  phone: "010-1111",
  address: "",
};

let connection = mysql.createConnection(conn); //DB커넥션 생성
connection.connect(); // DB 접속

let id = 1; //req.params
sql = "SELECT * FROM customers where id = ?";
connection.query(sql, [id], function (err, results, fields) {
  if (err) {
    throw err;
  }
  console.log(err);
  console.log(results);
});

connection.end(); //DB 접속 종류
