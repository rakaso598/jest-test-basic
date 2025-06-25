// 주어진 함수
async function fetchUserData(userId: number): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 100))

  if (userId <= 0) {
    throw new Error('유효하지 않은 사용자 ID')
  }

  return `사용자 ${userId} 데이터`
}

async function processFile(filename: string): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 50))

  if (!filename.endsWith('.txt')) {
    throw new Error('txt 파일만 처리할 수 있습니다')
  }

  return '파일 처리 완료'
}

// 테스트 작성하기
describe('비동기적 에러 테스트', () => {
  test('잘못된 사용자 ID로 에러가 발생한다', async () => {
    // TODO: await expect(fetchUserData(-1)).rejects.toThrow() 형태로 비동기 에러 테스트
    await expect(fetchUserData(-1)).rejects.toThrow('유효하지 않은 사용자 ID')
    // TODO: 에러 메시지도 정확한지 확인
  })

  test('잘못된 파일 확장자로 에러가 발생한다', async () => {
    // TODO: processFile('test.pdf') 호출이 비동기 에러를 던지는지 확인
    await expect(processFile('test.pdf')).rejects.toThrow('txt 파일만 처리할 수 있습니다')

    // TODO: 에러 메시지가 'txt 파일만 처리할 수 있습니다'인지 확인
  })
})