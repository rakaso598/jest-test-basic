// 주어진 함수
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('0으로 나눌 수 없습니다')
  }
  return a / b
}

function validateAge(age: number): string {
  if (age < 0) {
    throw new Error('나이는 음수가 될 수 없습니다')
  }
  if (age > 150) {
    throw new Error('나이가 너무 큽니다')
  }
  return '유효한 나이입니다'
}

// 테스트 작성하기
describe('동기적 에러 테스트', () => {
  test('0으로 나누면 에러가 발생한다', () => {
    // TODO: expect(() => divide(10, 0)).toThrow() 형태로 에러 테스트
    expect(() => divide(10, 0)).toThrow()

    // TODO: 에러 메시지도 정확한지 확인 (toThrow('0으로 나눌 수 없습니다'))
    expect(() => divide(10, 0)).toThrow('0으로 나눌 수 없습니다')
  })

  test('음수 나이는 에러가 발생한다', () => {
    // TODO: validateAge(-5) 호출이 에러를 던지는지 확인
    expect(() => validateAge(-5)).toThrow()

    // TODO: 에러 메시지가 '나이는 음수가 될 수 없습니다'인지 확인
    expect(() => validateAge(-5)).toThrow('나이는 음수가 될 수 없습니다')
  })
})
