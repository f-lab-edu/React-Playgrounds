/**
 * T타입에서 U타입을 제외한 나머지 타입을 생성한다.
 */
type OmitType<T, U extends keyof any> = PickType<T, ExcludeType<keyof T, U>>;

interface QueryOptions {
  data: any[];
  error: null;
  isError: false;
  status: 'success';
}

type RequestOptions = OmitType<QueryOptions, 'status' | 'isError'>;
