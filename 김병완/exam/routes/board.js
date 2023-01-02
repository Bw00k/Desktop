var express = require("express");
const pool = require("./pool");
var router = express.Router();

sql = {
  select: "select * from board order by title",
  insert: "insert into board set ?",
  update: "update board set ? where no=?",
  delete: "delete from board where no=?",
};

//조회
router.get("/", function (req, res) {
  pool.query(sql.select, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

//등록
router.post("/", (req, res) => {
  pool.query(sql.insert, req.body, function (err, results, field) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});
//수정
router.put("/:no", (req, res) => {
  let data = [req.body, req.params.no];
  pool.query(sql.update, data, function (err, results, fields) {
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
router.delete("/:no", (req, res) => {
  const no = req.params.no;
  pool.query(sql.delete, no, function (err, results, fields) {
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

module.exports = router;
