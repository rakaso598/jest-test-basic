// 주어진 함수
function greetUser(name: string, logger: (message: string) => void) {
  logger(`안녕하세요 ${name}님!`)
  return `환영합니다 ${name}님`
}

describe('greetUser 함수 테스트', () => {
  // 테스트 작성하기
  test('greetUser 함수가 logger를 올바르게 호출하는지 확인', () => {
    // TODO: Mock 함수 mockLogger 생성하기 (jest.fn() 사용)
    const mockLogger = jest.fn()

    // TODO: greetUser 함수 호출하기 (name: '홍길동', logger: 위에서 만든 Mock)
    greetUser('홍길동', mockLogger)
    // TODO: Mock 함수가 1번 호출되었는지 확인
    expect(mockLogger).toHaveBeenCalledTimes
    // TODO: Mock 함수가 '안녕하세요 홍길동님!'으로 호출되었는지 확인
    expect(mockLogger).toHaveBeenCalledWith('안녕하세요 홍길동님!')
  })
})

// 주어진 객체와 함수
const mathUtils = {
  add: (a: number, b: number) => a + b,
  multiply: (a: number, b: number) => a * b
}

function calculate(x: number, y: number) {
  const sum = mathUtils.add(x, y);
  const product = mathUtils.multiply(x, y);
  return { sum, product };
}

// 테스트 작성하기
test('calculate 함수가 mathUtils의 함수들을 호출하는지 확인', () => {
  // TODO: mathUtils.add에 spy 설정 (jest.spyOn 사용)
  const addSpy = jest.spyOn(mathUtils, 'add');

  // TODO: mathUtils.multiply에 spy 설정 (jest.spyOn 사용)
  const multiplySpy = jest.spyOn(mathUtils, 'multiply');

  // TODO: calculate(3, 4) 호출
  calculate(3, 4);

  // TODO: add가 (3, 4)로 호출되었는지 확인
  expect(addSpy).toHaveBeenCalledWith(3, 4);

  // TODO: multiply가 (3, 4)로 호출되었는지 확인
  expect(multiplySpy).toHaveBeenCalledWith(3, 4);
})
