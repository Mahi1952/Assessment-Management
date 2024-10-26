import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = []; // Replace with actual data fetching logic

  constructor() {}

  getAllCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find((course) => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  updateCourse(updatedCourse: Course): void {
    const index = this.courses.findIndex(
      (course) => course.id === updatedCourse.id
    );
    if (index !== -1) {
      this.courses[index] = updatedCourse;
    }
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter((course) => course.id !== id);
  }
}
