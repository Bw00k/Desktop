var express = require("express");
const pool = require("../test/pool_async");
var router = express.Router();

//전체조회
router.get("/", async (req, res) => {
  sql = "SELECT * FROM customers ";

  //pool.getconnection()
  let result = await pool.query(sql, function (err, results, data) {});
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  sql = "SELECT * FROM customers where id=?";
  pool.query(sql, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results[0]);
  });
});

//추가
router.post("/", (req, res) => {
  let sql = "insert into customers set ?";
  pool.query(sql, req.body, function (err, results, field) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//수정
router.put("/:id", (req, res) => {
  let sql = "update customers set ? where id=?";
  let data = [req.body, req.params.id];
  pool.query(sql, data, function (err, results, fields) {
    let resultData = {};
    if (err) {
      console.log(err);
      throw err;
    }
    if (results.changedRows > 0) {
      resultData.result = true;
      resultData.data = req.body;
    } else {
      resultData.result = false;
    }
    res.send(resultData);
  });
});

//삭제
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  let sql = "delete from customers where id = ?";
  pool.query(sql, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.statusCode = 200;
    res.end();
  });
});

module.exports = router;
