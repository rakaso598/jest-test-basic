// // 주어진 코드
// function sendNotification(message: string, sender: (msg: string) => boolean): string {
//   const success = sender(message)
//   return success ? '알림 전송 성공' : '알림 전송 실패'
// }

// // 테스트 작성하기
// describe('알림 전송 기능', () => {
//   let mockSender: jest.Mock<boolean, [string]>

//   beforeEach(() => {
//     // Setup (공통 준비)
//     // TODO: mockSender를 jest.fn()으로 생성
//   })

//   afterEach(() => {
//     // Teardown (공통 정리)
//     // TODO: mockSender.mockReset() 호출
//   })

//   test('알림 전송이 성공한다', () => {
//     // Setup (개별 준비)
//     // TODO: mockSender가 true를 반환하도록 설정

//     // Exercise (실행)
//     // TODO: sendNotification('테스트 메시지', mockSender) 호출
//     const result = // 여기에 결과 저장

//       // Assertion (검증)
//       expect(result).toBe('알림 전송 성공')
//     expect(mockSender).toHaveBeenCalledWith('테스트 메시지')

//     // Teardown은 afterEach에서 자동 처리
//   })

//   test('알림 전송이 실패한다', () => {
//     // Setup (개별 준비)
//     // TODO: mockSender가 false를 반환하도록 설정

//     // Exercise (실행)
//     // TODO: sendNotification('실패 테스트', mockSender) 호출
//     const result = // 여기에 결과 저장

//       // Assertion (검증)
//       expect(result).toBe('알림 전송 실패')
//     expect(mockSender).toHaveBeenCalledTimes(1)

//     // Teardown은 afterEach에서 자동 처리
//   })
// })
