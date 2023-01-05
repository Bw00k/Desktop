const pool = require("./pool");
var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/:prodnum", function (req, res, next) {
  const sql = "select * from product  where prodnum=?";
  pool.query(sql, req.params.prodnum, (err, result) => {
    res.render("order", { list: result });
  });
});

router.get("/", function (req, res, next) {
  const sql = "select * from product ";
  pool.query(sql, (err, result) => {
    res.render("order", { list: result });
  });
});

router.post("/", (req, res) => {
  let sql = "insert into ctmid set ?";
  pool.query(sql, req.body, function (err, results, field) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

module.exports = router;
