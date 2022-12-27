/*fssync .js 
동기식 =블로킹 함수
*/
const fs = require("fs"); //html <srcipt src = 'xxx.js'
const data = fs.readFileSync("./template/test.txt", "utf8");
console.log(data);
