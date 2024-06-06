/**
 *  pick K from T
 */
type PickType<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Example
 * pick warning color
 */
type Colors = {
  red: '#FF0000';
  yellow: '#FFFF00';
  blue: '#0000FF';
  gray: '#808080';
  black: '#000000';
};

type WarningColor = PickType<Colors, 'red' | 'yellow'>;
