// generics 사용 interface

interface Mobile1<T> {
  name: string;
  price: number;
  option: T;
}

// option에는 어떤 type 이 올지 모름

const m1: Mobile1<{ color: string; coupon: boolean }> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile1<string> = {
  name: "s20",
  price: 900,
  option: "good",
};

// generic 를 사용해 하나의 interface만 선언하고
// 각기 다른 모습의 개체들을 만들 수 있다.
