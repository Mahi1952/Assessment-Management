export interface Attendance {
  id: number;
  traineeId: number; // Reference to Trainee
  assessmentId: number; // Reference to Assessment
  attended: boolean; // Indicates if the trainee attended the assessment
  date: Date; // Date of attendance
}
