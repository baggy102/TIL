const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let K = parseInt(input[0]);
let sumMoney = [0];
let answer = 0;

for (let i = 1; i < input.length; i++) {
  let count = parseInt(input[i]);
  if (count == 0) {
    sumMoney.pop();
  } else {
    sumMoney.push(count);
  }
}

for (let j = 0; j < sumMoney.length; j++) {
  answer += sumMoney[j];
}

console.log(answer);
