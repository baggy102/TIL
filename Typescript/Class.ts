// Class 선언

class Car {
  public name: string = "car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

// 접근 제한자 (Access modifier) - public, private, protected
// 타입 스크립트에서는 접근 제한자를 지원함.
// public은 자식 클래스나 클래스 인스턴스에서 접근 가능(default)

class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(this.name); // car의 name이 public 이기 때문에 자식 클래스에서 접근할 수 있다.
  }
}

// private
// class Car  {private name: ~~~~~} 인 경우 Car class 내부에서만 name 사용 가능하다.
// private, # ~~ 로 사용 할 수 있다.

// protected
// class Car  {private name: ~~~~~} 경우 자식 클래스에서 사용 가능하다.
// public과의 차이는 ?

const z4 = new Bmw("black");
// console.log(z4.name)	-> err
// 자식 클래스에서 접근 가능하지만, public과 달리 class 인스턴스에서는 사용할 수 없다.

// public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
// protected - 자식 클래스에서 접근 가능
// privatet - 해당 클래스 내부에서만 접근 가능

// static property
// 정적 멤버 변수를 만들 수 있다.
// static 으로 선언된 정적 멤버 변수는
// this가 아닌 class 명 .~~ 으로 사용한다.
