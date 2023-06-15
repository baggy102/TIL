// Intersection Types
// 교차 타입, 여러 타입을 합쳐서 사용 함
// 여러개의 타입을 하나로 합쳐주는 역할

interface Car {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  // 각 interface가 가진 속성 모두 지정
  name: "타요",
  start() {},
  color: "blue",
  price: 1000,
};
