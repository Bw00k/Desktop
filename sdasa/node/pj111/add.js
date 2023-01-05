const pool = require("./pool");
const url  = require('url');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {

console.log("Enter ::");
console.log(req.body);
const price = req.body.price;
const num = req.body.qty;
console.log("num :: ", num);
console.log("price :: ", price);
  var sql = "";
  sql += "insert into cust (price, uname, address, phone, num) values ";
  sql += "("
  sql += price; 
  sql += ", 'test'";
  sql += ", 'test'";
  sql += ", '01012341234'";
  sql += ", " + num ; 
  sql +=  ")"
  pool.query(sql,(err, result) => {
    //console.log(result);
    console.log(err);
    //res.render("order", { list: result });
  });
});

module.exports = router;
