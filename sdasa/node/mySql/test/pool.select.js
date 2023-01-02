const pool = require("./pool"); //pool 모듈 로드

sql = "SELECT * FROM customers ";

//pool.getconnection()
pool.query(sql, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});
//pool.release()
