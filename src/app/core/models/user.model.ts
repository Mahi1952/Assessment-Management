import { Address } from './address.model';
import { Role } from './roles.enum';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  address: Address;
  role: Role; // Enum for User roles (Admin, Faculty, Trainee)
}
