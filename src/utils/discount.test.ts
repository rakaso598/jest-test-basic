
function calculateDiscount(price: number, discountRate: number) {
  if (typeof price !== 'number' || typeof discountRate !== 'number') return 0; // 가격이나 할인율이 숫자가 아니면 0 반환
  if (price < 0 || discountRate < 0 || discountRate > 100) return 0; // 가격이나 할인율이 음수이거나 할인율이 100%를 초과하면 0 반환
  return price * (1 - discountRate / 100); // 할인 계산
}

describe('할인 계산 함수 테스트', () => {
  test("정상적인 가격과 할인율에 대한 계산", () => {
    // TODO: 3 가지 테스트 케이스 작성해 보세요. 1000원 할인 10%, 2000원 할인 50%, 1000원 할인 20%
    expect(calculateDiscount(1000, 10)).toBe(900);
    // 나머지 테스트 케이스 작성해 보세요
    expect(calculateDiscount(2000, 50)).toBe(1000);
    expect(calculateDiscount(1000, 20)).toBe(800);
    expect(calculateDiscount(3000, 20)).toBe(2400);
  });

  test("정상적인 가격과 할인율 엣지 케이스 테스트", () => {
    // TODO: 2 가지 테스트 케이스 작성해 보세요. 1000원 할인 100%, 1000원 할인 0%
    expect(calculateDiscount(1000, 100)).toBe(0);
    expect(calculateDiscount(1000, 0)).toBe(1000);
  });

  test("음수 가격 처리", () => {
    // TODO: 2 가지 테스트 케이스 작성해 보세요. -1000원 할인 10%, -500원 할인 20%
    expect(calculateDiscount(-1000, 10)).toBe(0);
    expect(calculateDiscount(-500, 20)).toBe(0);
  });

  test("잘못된 할인율 처리", () => {
    // TODO: 2 가지 테스트 케이스 작성해 보세요. 1000원 할인 150%, 1000원 할인 -10%
    expect(calculateDiscount(1000, 150)).toBe(0);
    expect(calculateDiscount(1000, -10)).toBe(0);
  });
})