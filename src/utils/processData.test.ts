// 주어진 함수
function processData(data: any, validator: any): string {
  if (validator(data)) {
    return `데이터 처리 완료: ${data}`
  }
  return '유효하지 않은 데이터'
}

// 테스트 작성하기
test('유효한 데이터일 때와 유효하지 않을 때 테스트', () => {
  // TODO: Mock 함수 생성
  const mockValidator = jest.fn()

  // TODO: Mock 함수가 true를 반환하도록 설정 (mockReturnValue 사용)
  mockValidator.mockReturnValue(true)

  // TODO: processData('test', mockValidator) 호출하고 결과 확인
  const result = processData('test', mockValidator);
  expect(result).toBe('데이터 처리 완료: test')

  // TODO: Mock 함수가 false를 반환하도록 설정
  mockValidator.mockReturnValue(false)

  // TODO: processData('test', mockValidator) 호출하고 결과 확인
  const result2 = processData('test', mockValidator);
  expect(result2).toBe('유효하지 않은 데이터')
})
