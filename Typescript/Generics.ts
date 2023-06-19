// Generics 제네릭

// 제네릭을 이용하면 클래스나 함수, 인터페이스를 다양한 타입으로 재사용 할 수 있다.
// 생성시점에 사용할 타입을 결정한ㄷ나.

// function getSize(arr: number[] | string[] | boolean[], | object[]): number {
// 	return arr.length;
// }

// const arr1 = [1, 2, 3];
// getSize(arr1);	// 3

// string 으로
// const arr2 = ["a", "b", "c"];
// getSize(arr2);	// 3
// arr 발생
// 위처럼 매개변수 타입이 바뀌었는데 동일한 함수 재사용하려면
// 오버로드 사용 or | union type

// const arr3 = [false, true, ture];
// getSize(arr3); // 3

// const arr4 = [{}, {}, { name : "Tim" }];
// getSize(arr4);	// 3

// 다양한 타입 사용할 수 있다.
// 이럴때마다 getSize union type으로 추가시켜줘야 할까?

// -> generics

function getSize<T>(arr: T[]): number {
  return arr.length;
}

// 일반적으로 <> 안에 T를 사용함.
// T -> type을 전달받아서 함수에서 사용할 수 있게 함

const arr1 = [1, 2, 3];
getSize<number>(arr1);

const arr2 = ["a", "b", "c"];
getSize<string>(arr2);
