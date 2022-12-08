import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson, LessonDocument } from '../../schemas/lesson.schema';
import { Model } from 'mongoose';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>,
  ) {}

  async getLessons() {
    return this.lessonModel.find().exec();
  }

  async create(createLessonDto: CreateLessonDto) {
    return this.lessonModel.create(createLessonDto);
  }
}
