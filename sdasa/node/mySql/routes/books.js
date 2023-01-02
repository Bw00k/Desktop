var express = require("express");
const pool = require("../test/pool");
var router = express.Router();

sql = {
  select: "select * from books order by title",
  selectOne: "select * from books where no =?",
  insert: "insert into books set ?",
  update: "update books set ? where no=?",
  delete: "delete from books where no=?",
};
//전체조회
router.get("/", function (req, res) {
  pool.query(sql.select, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

//단건조회
router.get("/:no", (req, res) => {
  const no = req.params.no;
  pool.query(sql.selectOne, no, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
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
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

//삭제
router.delete("/:no", (req, res) => {
  const no = req.params.no;
  pool.query(sql.delete, no, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.statusCode = 200;
    res.end();
  });
});

module.exports = router;
