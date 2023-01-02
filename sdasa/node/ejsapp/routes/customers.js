const pool = require("../mysql/pool");
const express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  const sql = "select * from customers";
  pool.query(sql, (err, result) => {
    res.render("customer", { list: result });
  });
});

module.exports = router;
