// Typescript 함수 타입 정의

// 함수
function add1(num1: number, num2: number): number {
  return num1 + num2;
}

// 아무것도 return 하지 않는 경우
function add2(num1: number, num2: number): void {
  console.log(num1 + num2);
}

function isAdult(age: number): boolean {
  return age > 19;
}

// 함수의 매개변수 optional 지정

// function hello(name: string) {
//     return `Hello, ${name || "world"}`;
// }

// const result = hello();
// const result = hello("Sam");
// const result = hello(123);
// -> err 발생 name?: string; optional parameter 설정해야 함.

function hello(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}

// (...) -> 전달 받은 매개변수를 배열로 나타낼 수 있게

function add(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// this 타입 정의

interface User {
  name: string;
}

// const Sam: User = { name: "Sam" };

// function showName(this: User) {
//   console.log(this.name);
// }
// const a = showName.bind(Sam);
// a();

// 매개변수가 존재할 때
export {};
const Tom: User = { name: "Tom" };

function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const aa = showName.bind(Tom);
aa(30, "m");

// number or string
// 매개변수 타입에 따라 retrun 타입이 달라지게 하려면?

// interface User {
// 	name: string;
// 	age: number;
// }

// function join(name:string, age: number | string): User | string {
// 	if (typeof age === "number") {
// 		return {
// 			name,
// 			age,
// 		};
// 	} else {
// 	  return "나이는 숫자로 입력해주세요.";
// 	}
// }

// const sam: User = join("Sam", 30);
// const jane: String = join("Jane", "30");
// -> err 발생

// 오버로드 사용

interface User {
  name: string;
  age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string): User | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요";
  }
}
