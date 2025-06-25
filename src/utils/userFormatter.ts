// src/utils/userFormatter.ts
export type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

export function formatUserData(rawData: any): User {
  return {
    id: rawData.id,
    name: rawData.name.trim().toUpperCase(),
    email: rawData.email.toLowerCase(),
    isActive: rawData.status === 'active'
  };
}

export function mergeUsers(user1: User, user2: User): User[] {
  return [user1, user2];
}