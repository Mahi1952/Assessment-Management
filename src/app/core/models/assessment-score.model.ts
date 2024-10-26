export interface AssessmentScore {
  id: number;
  assessmentId: number; // Reference to Assessment
  traineeId: number; // Reference to Trainee
  score: number; // Score obtained
}
