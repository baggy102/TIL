class Node {
  next = null;
  constructor(data) {
    this.data = data;
  }
}

class Stack {
  top = null;
  count = 0;

  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    return ++this.count;
  }

  pop() {
    if (!this.top) {
      // stack underflow 방지
      return false;
    }
    const data = this.top.data;
    this.top = this.top.next;
    // 예전 this.top의 메모리 정리
    this.count--;
    return data;
  }

  stackTop() {
    return this.top.data;
  }

  empty() {
    if (this.count == 0) {
      return true;
    } else {
      return false;
    }
  }
}

const fs = require("fs");

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// const st = new Stack();

// for (let i = 1; i < input.length; i++) {
//   let first = input[i].split(" ")[0];

//   if (first == 1) {
//     st.push(input[i].split(" ")[1]);
//   } else if (first == 2) {
//     console.log(st.empty() ? -1 : st.pop());
//   } else if (first == 3) {
//     console.log(st.count);
//   } else if (first == 4) {
//     console.log(st.empty() ? 1 : 0);
//   } else {
//     console.log(!st.empty() ? st.stackTop() : -1);
//   }
// }

// for (let i = 1; i < input.length; i++) {
//   let first = input[i].split(" ")[0];

//   if (first == 1) {
//     stk.push(parseInt(input[i].split(" ")[1]));
//   } else if (first == 2) {
//     console.log(stk.length == 0 ? -1 : stk.pop());
//   } else if (first == 3) {
//     console.log(stk.length);
//   } else if (first == 4) {
//     console.log(stk.length == 0 ? 1 : 0);
//   } else {
//     console.log(!stk.length == 0 ? stk[stk.length - 1] : -1);
//   }
// }

let stk = [];
let result = [];

for (let i = 1; i < input.length; i++) {
  let first = parseInt(input[i].split(" ")[0]);

  switch (first) {
    case 1:
      stk.push(parseInt(input[i].split(" ")[1]));
      break;

    case 2:
      result.push(stk.length == 0 ? -1 : stk.pop());
      break;

    case 3:
      result.push(stk.length);
      break;

    case 4:
      result.push(stk.length == 0 ? 1 : 0);
      break;

    default:
      result.push(!stk.length == 0 ? stk[stk.length - 1] : -1);
      break;
  }
}

console.log(result.join("\n"));

// 1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
// 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 3: 스택에 들어있는 정수의 개수를 출력한다.
// 4: 스택이 비어있으면 1, 아니면 0을 출력한다.
// 5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.

// push(X)
