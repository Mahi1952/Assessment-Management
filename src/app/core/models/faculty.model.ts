import { User } from './user.model';

export interface Faculty {
  id: number;
  userId: number; // Reference to User
}
