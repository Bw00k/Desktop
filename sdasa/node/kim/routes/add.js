const pool = require("./pool");
const url = require("url");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  console.log("Enter ::");
  console.log(req.body);
  const prod = req.body.prod;
  const price = req.body.price;
  const num = req.body.qty;
  const uname = req.body.uname;
  const address = req.body.address;
  const phone = req.body.phone;
  console.log("num :: ", num);
  console.log("price :: ", price);
  var sql = "";
  sql +=
    "insert into cust (prod,price, uname, address, phone, num) values (?,?,?,?,?,?) ";
  data = [prod, price, uname, address, phone, num];
  pool.query(sql, data, (err, result) => {
    //console.log(result);
    console.log(err);
    //res.render("order", { list: result });
  });
});

module.exports = router;
