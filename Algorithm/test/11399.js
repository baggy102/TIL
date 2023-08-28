const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

/*
ATM앞에 N명의 사람들이 줄을 서있다. 
사람은 1번부터 N번까지 번호가 매겨져 있으며, 
i번 사람이 돈을 인출하는데 걸리는 시간은 Pi분이다.

줄을 서 있는 사람의 수 N과 
각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어졌을 때, 
각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오.

-> Pi 오름차순으로 정렬

-> 배열에 대입

-> 0 부터 .length 까지 합 answer 더한다.

-> 출력
*/

const N = parseInt(input);
let A = input[1]
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

let wait = 0;
let ans = 0;

A.forEach((n) => {
  wait += n;
  ans += wait;
});

console.log(ans);
