const mysql = require("./pool_async"); //pool 모듈 로드

sql1 = "SELECT * FROM customers ";
sql2 = "SELECT * FROM board";

//mysql.query(sql1).then((result) => console.log(result));
//pool.getconnection()
/* pool.query(sql, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
}); */
//pool.release()

async function get() {
  let result1 = await mysql.query(sql1);
  let result2 = await mysql.query(sql2, result[0].id);
  console.log({ cust: result1, board: result2 });
}
get();
console.log("end");
