import { Injectable } from '@angular/core';
import { Assessment } from '../models/assessment.model';

@Injectable({
  providedIn: 'root',
})
export class AssessmentService {
  private assessments: Assessment[] = [
    {
      id: 1,
      assessmentNo: 'A001',
      assessmentDate: new Date('2024-11-01'),
      assessmentTime: '10:00',
      questions: [
        {
          id: 1,
          text: 'What is the capital of France?',
          options: ['London', 'Paris', 'Berlin', 'Madrid'],
          answer: 'Paris',
          type: 'Multiple Choice',
        },
        {
          id: 2,
          text: 'Explain the theory of relativity.',
          options: [],
          answer:
            'The theory of relativity explains how space and time are linked for objects that are moving at a consistent speed in a straight line.',
          type: 'Subjective',
        },
      ],
      facultyId: 1,
    },
    {
      id: 2,
      assessmentNo: 'A002',
      assessmentDate: new Date('2024-11-02'),
      assessmentTime: '11:00',
      questions: [
        {
          id: 3,
          text: 'What is 2 + 2?',
          options: ['3', '4', '5', '6'],
          answer: '4',
          type: 'Multiple Choice',
        },
        {
          id: 4,
          text: 'Discuss the impact of climate change.',
          options: [],
          answer:
            'Climate change affects weather patterns, sea levels, and ecosystems, causing significant environmental and economic impacts.',
          type: 'Subjective',
        },
      ],
      facultyId: 2,
    },
    {
      id: 3,
      assessmentNo: 'A003',
      assessmentDate: new Date('2024-11-03'),
      assessmentTime: '12:00',
      questions: [
        {
          id: 5,
          text: 'What is the chemical symbol for water?',
          options: ['O2', 'H2O', 'CO2', 'NaCl'],
          answer: 'H2O',
          type: 'Multiple Choice',
        },
        {
          id: 6,
          text: 'Describe the process of photosynthesis.',
          options: [],
          answer:
            'Photosynthesis is the process by which green plants use sunlight to synthesize foods with the help of chlorophyll.',
          type: 'Subjective',
        },
      ],
      facultyId: 1,
    },
    {
      id: 4,
      assessmentNo: 'A004',
      assessmentDate: new Date('2024-11-04'),
      assessmentTime: '13:00',
      questions: [
        {
          id: 7,
          text: 'Which gas do plants absorb from the atmosphere?',
          options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
          answer: 'Carbon Dioxide',
          type: 'Multiple Choice',
        },
        {
          id: 8,
          text: 'What are the causes of deforestation?',
          options: [],
          answer:
            'Deforestation is caused by agriculture, logging, urbanization, and mining.',
          type: 'Subjective',
        },
      ],
      facultyId: 3,
    },
    {
      id: 5,
      assessmentNo: 'A005',
      assessmentDate: new Date('2024-11-05'),
      assessmentTime: '14:00',
      questions: [
        {
          id: 9,
          text: 'What is the largest mammal in the world?',
          options: ['Elephant', 'Blue Whale', 'Giraffe', 'Great White Shark'],
          answer: 'Blue Whale',
          type: 'Multiple Choice',
        },
        {
          id: 10,
          text: 'Explain the significance of biodiversity.',
          options: [],
          answer:
            'Biodiversity is important for ecosystem stability, food security, and resilience against climate change.',
          type: 'Subjective',
        },
      ],
      facultyId: 2,
    },
    {
      id: 6,
      assessmentNo: 'A006',
      assessmentDate: new Date('2024-11-06'),
      assessmentTime: '15:00',
      questions: [
        {
          id: 11,
          text: 'Which element has the atomic number 1?',
          options: ['Oxygen', 'Hydrogen', 'Helium', 'Carbon'],
          answer: 'Hydrogen',
          type: 'Multiple Choice',
        },
        {
          id: 12,
          text: 'What are the main types of renewable energy?',
          options: [],
          answer:
            'The main types of renewable energy are solar, wind, hydro, and geothermal energy.',
          type: 'Subjective',
        },
      ],
      facultyId: 1,
    },
    {
      id: 7,
      assessmentNo: 'A007',
      assessmentDate: new Date('2024-11-07'),
      assessmentTime: '16:00',
      questions: [
        {
          id: 13,
          text: 'What is the powerhouse of the cell?',
          options: [
            'Nucleus',
            'Ribosome',
            'Mitochondria',
            'Endoplasmic Reticulum',
          ],
          answer: 'Mitochondria',
          type: 'Multiple Choice',
        },
        {
          id: 14,
          text: 'Describe the water cycle.',
          options: [],
          answer:
            'The water cycle describes the continuous movement of water on, above, and below the surface of the Earth.',
          type: 'Subjective',
        },
      ],
      facultyId: 3,
    },
    {
      id: 8,
      assessmentNo: 'A008',
      assessmentDate: new Date('2024-11-08'),
      assessmentTime: '17:00',
      questions: [
        {
          id: 15,
          text: 'Which continent is known as the Dark Continent?',
          options: ['Asia', 'Africa', 'Europe', 'South America'],
          answer: 'Africa',
          type: 'Multiple Choice',
        },
        {
          id: 16,
          text: 'What are the effects of globalization?',
          options: [],
          answer:
            'Globalization can lead to cultural exchange, economic growth, but also inequality and loss of local traditions.',
          type: 'Subjective',
        },
      ],
      facultyId: 2,
    },
    {
      id: 9,
      assessmentNo: 'A009',
      assessmentDate: new Date('2024-11-09'),
      assessmentTime: '18:00',
      questions: [
        {
          id: 17,
          text: 'What is the speed of light?',
          options: ['300,000 km/s', '150,000 km/s', '1,000 km/s', '3,000 km/s'],
          answer: '300,000 km/s',
          type: 'Multiple Choice',
        },
        {
          id: 18,
          text: 'Explain how to solve a quadratic equation.',
          options: [],
          answer:
            'To solve a quadratic equation, you can use the quadratic formula: x = (-b ± √(b² - 4ac)) / (2a).',
          type: 'Subjective',
        },
      ],
      facultyId: 1,
    },
    {
      id: 10,
      assessmentNo: 'A010',
      assessmentDate: new Date('2024-11-10'),
      assessmentTime: '19:00',
      questions: [
        {
          id: 19,
          text: 'What is the capital of Japan?',
          options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
          answer: 'Tokyo',
          type: 'Multiple Choice',
        },
        {
          id: 20,
          text: 'What is the importance of international relations?',
          options: [],
          answer:
            'International relations are important for diplomacy, trade, and global security.',
          type: 'Subjective',
        },
      ],
      facultyId: 3,
    },
    {
      id: 11,
      assessmentNo: 'A011',
      assessmentDate: new Date('2024-11-11'),
      assessmentTime: '20:00',
      questions: [
        {
          id: 21,
          text: 'Which planet is known as the Morning Star?',
          options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
          answer: 'Venus',
          type: 'Multiple Choice',
        },
        {
          id: 22,
          text: 'Discuss the role of technology in education.',
          options: [],
          answer:
            'Technology enhances education by providing access to information and interactive learning tools.',
          type: 'Subjective',
        },
      ],
      facultyId: 1,
    },
    {
      id: 12,
      assessmentNo: 'A012',
      assessmentDate: new Date('2024-11-12'),
      assessmentTime: '21:00',
      questions: [
        {
          id: 23,
          text: 'What is the hardest natural substance on Earth?',
          options: ['Gold', 'Diamond', 'Iron', 'Quartz'],
          answer: 'Diamond',
          type: 'Multiple Choice',
        },
        {
          id: 24,
          text: 'Describe the significance of the scientific method.',
          options: [],
          answer:
            'The scientific method is crucial for conducting experiments and validating findings systematically.',
          type: 'Subjective',
        },
      ],
      facultyId: 2,
    },
    {
      id: 13,
      assessmentNo: 'A013',
      assessmentDate: new Date('2024-11-13'),
      assessmentTime: '22:00',
      questions: [
        {
          id: 25,
          text: 'What gas do humans breathe in?',
          options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Helium'],
          answer: 'Oxygen',
          type: 'Multiple Choice',
        },
        {
          id: 26,
          text: 'What are the ethical considerations in research?',
          options: [],
          answer:
            'Ethical considerations in research include informed consent, confidentiality, and minimizing harm to participants.',
          type: 'Subjective',
        },
      ],
      facultyId: 3,
    },
    {
      id: 14,
      assessmentNo: 'A014',
      assessmentDate: new Date('2024-11-14'),
      assessmentTime: '23:00',
      questions: [
        {
          id: 27,
          text: 'What is the main ingredient in guacamole?',
          options: ['Tomato', 'Onion', 'Avocado', 'Pepper'],
          answer: 'Avocado',
          type: 'Multiple Choice',
        },
        {
          id: 28,
          text: 'Discuss the impact of social media on society.',
          options: [],
          answer:
            'Social media influences communication, relationships, and can affect mental health positively and negatively.',
          type: 'Subjective',
        },
      ],
      facultyId: 1,
    },
    {
      id: 15,
      assessmentNo: 'A015',
      assessmentDate: new Date('2024-11-15'),
      assessmentTime: '24:00',
      questions: [
        {
          id: 29,
          text: 'What is the formula for calculating the area of a circle?',
          options: ['πr²', '2πr', 'πd', '2r'],
          answer: 'πr²',
          type: 'Multiple Choice',
        },
        {
          id: 30,
          text: 'Explain the concept of supply and demand.',
          options: [],
          answer:
            'Supply and demand is an economic model that explains how the price and quantity of goods are determined in a market.',
          type: 'Subjective',
        },
      ],
      facultyId: 2,
    },
  ];

  constructor() {}

  getAllAssessments(): Assessment[] {
    return this.assessments;
  }

  getAssessmentById(id: number): Assessment | undefined {
    return this.assessments.find((assessment) => assessment.id === id);
  }

  addAssessment(assessment: Assessment): void {
    this.assessments.push(assessment);
  }

  updateAssessment(updatedAssessment: Assessment): void {
    const index = this.assessments.findIndex(
      (assessment) => assessment.id === updatedAssessment.id
    );
    if (index !== -1) {
      this.assessments[index] = updatedAssessment;
    }
  }

  deleteAssessment(id: number): void {
    this.assessments = this.assessments.filter(
      (assessment) => assessment.id !== id
    );
  }
}
