// Literal Types

const userName1 = "Bob";
let userName2 = "Tom";

// userName2 = 3;
// -> err string으로 지정했기 때문
// -> 정해진 string 값을 가짐; 문자형 literal type

type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: "Bob",
  job: "police", // job 프로퍼티는 위에서 지정한 값 중 하나로 써야한다.
};

// 숫자형 literal type

interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3;
}
