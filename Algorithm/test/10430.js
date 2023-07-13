const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().split(" ");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
