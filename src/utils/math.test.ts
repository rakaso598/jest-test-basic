// src/utils/math.test.ts
import { add, multiply } from './math';

describe('수학 함수 테스트', () => {
  test('덧셈이 올바르게 동작한다', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('곱셈이 올바르게 동작한다', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
  });
});
