const pool = require("./pool");
const url  = require('url');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const sql = "select * from product where prodnum = 1";
  pool.query(sql,(err, result) => {
    //console.log(result);
    console.log(err);
    res.render("order", { list: result });
  });
});

module.exports = router;
