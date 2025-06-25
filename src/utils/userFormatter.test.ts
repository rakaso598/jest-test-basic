// __tests__/unit/utils/userFormatter.test.ts
import { formatUserData, mergeUsers, User } from './userFormatter';

describe('사용자 데이터 포맷팅', () => {
  test('사용자 데이터를 올바르게 포맷팅한다', () => {
    const rawData = {
      id: 1,
      name: '  john doe  ',
      email: 'JOHN@EXAMPLE.COM',
      status: 'active'
    };

    const expected = {
      id: 1,
      name: 'JOHN DOE',
      email: 'john@example.com',
      isActive: true
    };

    expect(formatUserData(rawData)).toStrictEqual(expected);
  });

  test('배열 비교도 가능하다', () => {
    const user1: User = { id: 1, name: 'John', email: 'john@test.com', isActive: true };
    const user2: User = { id: 2, name: 'Jane', email: 'jane@test.com', isActive: false };

    expect(mergeUsers(user1, user2)).toStrictEqual([user1, user2]);
  });
});