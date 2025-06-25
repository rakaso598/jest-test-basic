// 주어진 함수
function formatMessage(message: string, formatter: (msg: string) => string): string {
  return formatter(message)
}

// 테스트 작성하기
test('메시지 포맷터 테스트', () => {
  // TODO: Mock 함수 생성 (jest.fn())
  const mockFormatter = jest.fn()

  // TODO: Mock 함수가 대문자로 변환하는 로직을 갖도록 설정 (mockImplementation)
  // 힌트: (msg: string) => msg.toUpperCase()
  mockFormatter.mockImplementation((msg: string) => msg.toUpperCase())

  const result1 = formatMessage('hello', mockFormatter)
  expect(result1).toBe('HELLO')

  // TODO: Mock 함수가 앞에 '★'을 붙이는 로직으로 변경
  // 힌트: (msg: string) => `★ ${msg}`
  mockFormatter.mockImplementation((msg: string) => `★ ${msg}`)

  const result2 = formatMessage('world', mockFormatter)
  expect(result2).toBe('★ world')
})
