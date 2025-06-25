// 주어진 함수
function rollDice(randomGenerator: () => number): string {
  const num = randomGenerator()
  return `주사위 결과: ${num}`
}

// 테스트 작성하기
test('주사위 여러 번 굴리기 테스트', () => {
  // TODO: Mock 함수 생성 (jest.fn())
  const mockRandom = jest.fn()

  // TODO: 첫 번째 호출에서 6 반환 (mockReturnValueOnce)
  mockRandom.mockReturnValueOnce(6)

  // TODO: 두 번째 호출에서 1 반환 (mockReturnValueOnce)
  mockRandom.mockReturnValueOnce(1)

  const result1 = rollDice(mockRandom)
  expect(result1).toBe('주사위 결과: 6')

  const result2 = rollDice(mockRandom)
  expect(result2).toBe('주사위 결과: 1')
})
