const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const FileStore = require("session-file-store")(session);

const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "~~1~", // 원하는 문자 입력
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
  })
);
