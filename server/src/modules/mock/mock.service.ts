import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson, LessonDocument } from '../../schemas/lesson.schema';
import { Model } from 'mongoose';
import * as path from 'path';
import * as fs from 'fs';
import { ILessonMock } from './interfaces/lesson.mock.interface';
import { LessonsService } from '../lessons/lessons.service';

@Injectable()
export class MockService {
  constructor(
    @InjectModel(Lesson.name) private lessonsModel: Model<LessonDocument>,
    private lessonsService: LessonsService,
  ) {
    this.syncLessons();
  }

  private readLessonsData(): ILessonMock[] {
    const lessonPath = path.resolve(
      './src/modules/autocomplete/data/lessons.json',
    );
    const raw = fs.readFileSync(lessonPath, { encoding: 'utf-8' });
    return JSON.parse(raw).lessons;
  }

  private async syncLessons() {
    const groupedLessons = this.readLessonsData();

    for (const lessonItem of groupedLessons) {
      for (const group of lessonItem.groups) {
        const isExist = await this.lessonsService.findOneByFilter({
          name: lessonItem.name,
          group: group,
        });

        if (!isExist) {
          this.lessonsService.create({
            name: lessonItem.name,
            group: group,
            course: parseInt(group.at(-2)),
          });
        }
      }
    }
  }
}
