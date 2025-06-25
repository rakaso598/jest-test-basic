// 주어진 함수
async function fetchUserName(userId: number): Promise<string> {
  // 실제로는 API 호출
  await new Promise(resolve => setTimeout(resolve, 100))
  return `사용자${userId}`
}

// 테스트 작성하기
test('사용자 이름을 성공적으로 가져온다', async () => {
  // TODO: fetchUserName(1) 호출하고 결과를 변수에 저장 (await 사용)
  const result = await fetchUserName(1)

  expect(result).toBe('사용자1')
})

// 주어진 함수
async function validateUser(userId: number): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 50))

  if (userId <= 0) {
    throw new Error('유효하지 않은 사용자 ID')
  }

  return '유효한 사용자'
}

// 테스트 작성하기
test('잘못된 사용자 ID로 에러가 발생한다', async () => {
  // TODO: expect.assertions(1) 추가 (에러 테스트를 위해)
  expect.assertions(1)

  try {
    // TODO: validateUser(-1) 호출 (await 사용)
    await validateUser(-1)

  } catch (error) {
    if (error instanceof Error) {
      expect(error.message).toBe("유효하지 않은 사용자 ID");
    }
  }
})

// 주어진 함수들
async function saveData(data: string): Promise<boolean> {
  // 실제로는 DB 저장
  await new Promise(resolve => setTimeout(resolve, 100))
  return true
}

async function processAndSave(data: string, saver: (data: string) => Promise<boolean>): Promise<string> {
  const success = await saver(data)
  return success ? '저장 완료' : '저장 실패'
}

// 테스트 작성하기
test('데이터 처리 후 저장이 성공한다', async () => {
  // TODO: Mock 함수 생성 (jest.fn().mockResolvedValue(true) 사용)
  const mockSaver = jest.fn().mockResolvedValue(true)

  // TODO: processAndSave('테스트', mockSaver) 호출 (await 사용)
  const result = await processAndSave('테스트', mockSaver)

  expect(result).toBe('저장 완료')
  expect(mockSaver).toHaveBeenCalledWith('테스트')
})
