// 주어진 코드
let userList: string[] = []

function addUser(name: string): void {
  userList.push(name)
}

function getUserCount(): number {
  return userList.length
}

function clearUsers(): void {
  userList = []
}

// 테스트 작성하기
describe('사용자 목록 관리', () => {
  test('사용자 추가 후 개수가 증가한다', () => {
    // Setup (준비)
    // TODO: userList를 빈 배열로 초기화
    userList = []

    // Exercise (실행)
    // TODO: 'Alice' 사용자 추가
    addUser('Alice')
    // TODO: 'Bob' 사용자 추가
    addUser('Bob')

    // Assertion (검증)
    expect(getUserCount()).toBe(2)

    // Teardown (정리)
    // TODO: clearUsers() 호출해서 정리
    clearUsers()
  })

  test('사용자 목록 초기화가 동작한다', () => {
    // Setup (준비)
    // TODO: 테스트용 사용자 2명 추가 ('Test1', 'Test2')
    userList = []
    addUser('Test1')
    addUser('Test2')

    // Exercise (실행)
    // TODO: clearUsers() 호출
    clearUsers()

    // Assertion (검증)
    expect(getUserCount()).toBe(0)

    // Teardown (정리)
    // 이미 정리되었으므로 추가 정리 불필요
  })
})
