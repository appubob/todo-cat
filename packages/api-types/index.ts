// Shared Types
export interface User {
  id: string;
  username: string;
  coins: number;
  backgroundColorId: string;
  hatId: string | null;
  eyewearId: string | null;
  furColorId: string;
}

export interface Task {
  id: string;
  userId: string;
  title: string;       // Decrypted on the fly by Backend
  description: string; // Decrypted on the fly by Backend
  value: number;
  deadline: string;    // ISO Date string
  isRecurring: boolean;
}

export interface UserPurchase {
  userId: string;
  storeItemId: string;
}