function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("hello");
      resolve("hello");
    }, 3000); //지연시간
  });
}

greet()
  .then((res) => {
    onsole.log(res);
    return res.length;
  })
  .then((res) => {
    console.log(res);
  });

console.log("end");
