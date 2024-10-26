import { User } from './user.model';

export interface Trainee {
  id: number;
  userId: number; // Reference to User
}
