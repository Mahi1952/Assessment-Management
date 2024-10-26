import { Question } from './question.model';

export interface Assessment {
  id: number;
  assessmentNo: string;
  assessmentDate: Date;
  assessmentTime: string; // Consider using Date or Time type based on your requirements
  questions: Question[]; // Array of Question objects
  facultyId: number; // Reference to Faculty
}
