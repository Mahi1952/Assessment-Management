export interface Question {
  id: number;
  text: string; // qText
  options: string[]; // Array of options
  answer: string; // Correct answer
  type: string; // qType (Multiple Choice, True/False, etc.)
}
