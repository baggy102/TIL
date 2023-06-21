// Partial<T>

// property를 모두 optional로 바꿔준다.
// 일부만 사용하는 것이 가능.

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

let admin: Partial<User> = {
  id: 1,
  name: "Bob",
};

// Required<T>

// 모든 property를 필수로 바꿔준다.

interface User2 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

// let admin: Required<User2> = {
//     id: 1,
//     name: "Bob",
//     age: 10,
// }
// -> err : property gender is missing
