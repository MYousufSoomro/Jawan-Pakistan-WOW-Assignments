// console.log("Node JS is running...");
// const sum = 5 + 3;
// console.log(sum);

const fs = require("fs");
const http = require("http");
const { unlinkSync } = require("node:fs");

fs.writeFileSync("text.txt", "hello world");
let res = fs.readFileSync("text.txt", "utf-8");
console.log(res);

fs.writeFileSync("text.txt", "hello world world");
res = fs.readFileSync("text.txt", "utf-8");
console.log(res);

try {
  unlinkSync("text.txt");
  console.log("successfully deleted text.txt");
} catch (err) {
  // handle the error
  console.log(err);
}

// fs.writeFile("text.txt", "hello world that is awesome world!");
// fs.readFile("text.txt", "utf-8", (error, data) =>
//   console.log("ERROR >>>", error, ": DATA >>> ", data)
// );

// fs.mkdirSync("new-folder");

const server = http.createServer((request, response) => {
  console.log(request.url);

  response.end("Server is running...");
});

server.listen(5000);
