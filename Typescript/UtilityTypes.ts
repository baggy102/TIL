// Utility Types

// key of

interface User {
  id: number;
  name: string;
  age: number;
  grnder: "m" | "f";
}

// key of key 값을 사용하면 위 user interface의 key 값을
// union 형태로 받을 수 있다.

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk: UserKey = "age";
