// Record<K,T>
// K : key, T : type

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D";

const score: Record<Grade, Score> = {
  1: "A",
  2: "C",
  3: "B",
  4: "D",
};

// Pick<T,K>
// T type에서 K property만 골라서 사용한다.

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

const memberA: Pick<User, "id" | "name"> = {
  id: 0,
  name: "Bob",
};

// Omit<T,K>
// T type에서 K property만 제외하고 사용한다.
