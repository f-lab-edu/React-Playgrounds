/**
 * 함수의 리턴 타입을 반환.
 */
type FunctionReturnType<T extends (...args: any) => any> = T extends (
  args: any,
) => infer R
  ? R
  : any;

const indicator = () =>
  ({
    birth: {
      label: 'brith',
      definition: 'per 1,000',
    },
    death: {
      label: 'death',
      definition: 'per 1,000',
    },
  }) as const;

type Indicator = keyof FunctionReturnType<typeof indicator>;
