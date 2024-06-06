/**
 * T 타입에서 K 타입을 제외
 */
type ExcludeType<T, K> = T extends K ? never : T;

/**
 * Example
 * Student타입에서 group, school 프로퍼티를 제외한다.
 */
interface Student {
  id: string;
  name: string;
  group: 'A' | 'B' | 'C';
  school: string;
}

type StudentResponse = {
  [K in ExcludeType<keyof Student, 'group' | 'school'>]: Student[K];
};
