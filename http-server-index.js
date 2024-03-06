const fs = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.end("Server is running...");
});
server.listen(5000, () => {
  console.log("server is running at: http://localhost:5000/");
});

fs.writeFileSync("text.txt", "hello world");
let res = fs.readFileSync("text.txt", "utf-8");
console.log(res);
