import { Lesson } from '../../../schemas/lesson.schema';

export class AddTeachersLessonDto {
  teacherId: string;
  lessonId: Lesson;
}
