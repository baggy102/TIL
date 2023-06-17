// 추상 class
abstract class Car1 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

// const car = new Car('red); -> err 발생

// 추상 클래스는 new 를 이용해 객체를 만들 수 없고
// 상속을 통해서만 사용이 가능하다.

// 추상화의 개념
// property나 메서드의 이름만 선언해주고
// 상속 class 에서 구체적인 기능을 구현해준다.
// 즉, 추상 class 를 상속받은 수 많은 객체들이
// 동일하게 메서드를 가지고 있지만
// 그 기능은 각기 다를 수 있다.

class Bmw1 extends Car1 {
  constructor(color: string) {
    super(color);
  }
}

const z = new Bmw("black");
