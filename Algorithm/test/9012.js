const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const result = [];

console.log(input);

for (let i = 1; i < input.length; i++) {
  let cnt = 0;

  for (let value of input[i].trim()) {
    cnt += value === "(" ? 1 : -1;

    if (cnt < 0) {
      break;
    }
  }

  result.push(cnt == 0 ? "YES" : "NO");
}

console.log(result.join("\n"));
console.log(result);
console.log(input);
