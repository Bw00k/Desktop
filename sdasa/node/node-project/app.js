import express from "express";
import boardRouter from "./route/board.js";
import customerRouter from "./route/customer.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/static", express.static("public"));

app.get("/login", function (req, res) {
  console.log(req.query.email);
  res.send("로그인완료");
});
app.use("/board", boardRouter);
app.use("/customer", customerRouter);
app.use(function (err, req, res, next) {
  res.status(500).json({ code: res.statusCode, msg: err.message });
});

app.get(
  "/example",
  (req, res, next) => {
    throw new Error("에러발생");
    console.log("첫번째 콜백");
    next();
  },
  (req, res) => {
    res.send("두번째 콜백");
  }
);

app.get("/", (req, res) => {
  res.send("hello world!!!!");
});

//acd abcd
app.get("/ab[0-9]cd", (req, res) => {
  res.send("졍규표현식");
});

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
