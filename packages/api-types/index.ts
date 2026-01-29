// Shared Types
export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  coins: number;
  backgroundColorId: string;
  hatId: string | null;
  eyewearId: string | null;
  furColorId: string;
}

export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  value: number;
  deadline: string;
  isRecurring: boolean;
}

export interface UserPurchase {
  userId: string;
  storeItemId: string;
}