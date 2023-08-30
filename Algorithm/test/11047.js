const fs = require("fs");

// const input = require("fs").readFileSync("example.txt").toString().split("\n");

const [N, ...nums] = require("fs").readFileSync("example.txt").toString().trim().split(/\s+/).map(Number);

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

/*
동전의 종류 총 N가지
동전의 적절히 조합해 그 합을 K로 만드려 한다.
필요한 동전 개수의 최솟값을 구하라

둘째 줄에 동전의 가치 Ai가 오름차순으로 주어짐

*/
let price = nums.shift();

nums.sort((a, b) => b - a);
let count = 0;
console.log(N, nums);
console.log(price);

for (let i = 0; i < N; i++) {
  if (nums[i] > price) {
    continue;
  } else {
    const value = Math.floor(price / nums[i]);
    price -= value * nums[i];
    count += value;
    if (price === 0) {
      break;
    }
  }
}

console.log(count);
