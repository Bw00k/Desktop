const http = require("http");
const cookie = require("cookie");

const server = http.createServer((req, res) => {
  let cookies;
  if (req.headers.cookie) {
    cookies = cookie.parse(req.headers.cookie);
    console.log(cookies.username);
  }
  console.log(cookies);
  res.writeHead(200, {
    "Set-Cookie": [
      "cookie_aa=kim",
      `username=kim; Max-Age=${5 * 60}; HttpOnly; Path=/user`,
    ],
  });
  res.end("hello");
});
server.listen(3000, () => {
  console.log("server running http://localhost :3000");
}); //메서드 체인
