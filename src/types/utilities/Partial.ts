/**
 * T타입의 모든 키와 값 타입을 optional 속성으로 만든다.
 */
type PartialType<T> = {
  [K in keyof T]?: T[K];
};

/**
 * Example
 */
type Person = {
  name: string;
  age: number;
};

type Manager = {
  group: string;
} & PartialType<Person>;

const manager: Manager = {
  group: 'A',
  name: 'apple',
};
