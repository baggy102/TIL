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
