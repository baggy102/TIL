// Exclude<T1,T2>

// Type1에서 Type2만 제외하고 사용한다.
// Omit은 property만 제외,
// 반면 Exclude는 타입으로 제외 시킨다.

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

// type T1에서 boolean만 사용할 것이다.

// NonNullable<Type>
// null, undefined를 제외한 타입을 생성

type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;
