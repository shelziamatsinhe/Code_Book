import { MOCK_COURSES } from '../models/Course';

export class HomeViewModel {
  getCourses() {
    return MOCK_COURSES;
  }
}