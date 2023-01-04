function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("hello");
      resolve("hello");
    }, 3000); //지연시간
  });
}
async function callgreet() {
  var result = await greet();
  console.log(result);
  console.log(result.length);
}

callgreet(); //non - 블록킹
console.log("end");
