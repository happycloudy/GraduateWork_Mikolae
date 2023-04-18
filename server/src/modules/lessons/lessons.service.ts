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
    return this.lessonModel.find().populate('teacher').exec();
  }

  async create(createLessonDto: CreateLessonDto) {
    return this.lessonModel.create(createLessonDto);
  }

  async findOneById(id: string) {
    return this.lessonModel.findOne({
      _id: id,
    });
  }

  async findOneByFilter(filter: any) {
    return this.lessonModel.findOne(filter);
  }
}
