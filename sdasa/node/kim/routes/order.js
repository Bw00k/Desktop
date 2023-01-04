const pool = require("./pool");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:prodnum', function(req, res, next) {
  const sql = "select * from product where = ?";
  pool.query(sql,"/:prodnum",(err, result) => {
    res.render("order", { list: result });
  });
});

module.exports = router;
