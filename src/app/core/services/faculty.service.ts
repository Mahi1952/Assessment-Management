import { Injectable } from '@angular/core';
import { Faculty } from '../models/faculty.model';
import { User } from '../models/user.model';
import { Role } from '../models/roles.enum';

@Injectable({
  providedIn: 'root',
})
export class FacultyService {
  private facultyMembers: Faculty[] = [
    {
      id: 1,
      userId: 1, // Reference to User
    },
    {
      id: 2,
      userId: 2, // Reference to User
    },
    {
      id: 3,
      userId: 3, // Reference to User
    },
  ];

  constructor() {}

  getAllFaculty(): Faculty[] {
    return this.facultyMembers;
  }

  getFacultyById(id: number): Faculty | undefined {
    return this.facultyMembers.find((faculty) => faculty.id === id);
  }

  addFaculty(faculty: Faculty): void {
    this.facultyMembers.push(faculty);
  }

  updateFaculty(updatedFaculty: Faculty): void {
    const index = this.facultyMembers.findIndex(
      (faculty) => faculty.id === updatedFaculty.id
    );
    if (index !== -1) {
      this.facultyMembers[index] = updatedFaculty;
    }
  }

  deleteFaculty(id: number): void {
    this.facultyMembers = this.facultyMembers.filter(
      (faculty) => faculty.id !== id
    );
  }
}
