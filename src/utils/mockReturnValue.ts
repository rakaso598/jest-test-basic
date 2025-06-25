// 주어진 함수
function checkAge(age: number, ageChecker: (age: number) => boolean): string {
  const isAdult = ageChecker(age)
  return isAdult ? '성인입니다' : '미성년자입니다'
}

// 테스트 작성하기
test.only('나이 체크 함수 테스트', () => {
  // TODO: Mock 함수 생성 (jest.fn())
  const mockAgeChecker = jest.fn()

  // TODO: Mock 함수가 true를 반환하도록 설정 (mockReturnValue)
  mockAgeChecker.mockReturnValue(true)

  const result1 = checkAge(25, mockAgeChecker)
  expect(result1).toBe('성인입니다')

  // TODO: Mock 함수가 false를 반환하도록 설정
  mockAgeChecker.mockReturnValue(false)

  const result2 = checkAge(15, mockAgeChecker)
  expect(result2).toBe('미성년자입니다')
})
