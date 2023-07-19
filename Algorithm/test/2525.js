const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let H = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]) + parseInt(input[1]);

if (M >= 60) {
  if (H + M / 60 > 23) {
    console.log(parseInt(H + M / 60 - 24), M % 60);
  } else {
    console.log(parseInt(H + M / 60), M % 60);
  }
} else {
  console.log(H, M);
}
