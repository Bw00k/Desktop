const pool = require("./pool");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const sql = "select * from product";
  pool.query(sql, (err, result) => {
    res.render("index", { list: result });
  });
});

module.exports = router;





  



