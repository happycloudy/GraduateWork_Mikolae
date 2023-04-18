import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson, LessonDocument } from '../../schemas/lesson.schema';
import { Model } from 'mongoose';

@Injectable()
export class AutocompleteService {
  constructor(
    @InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>,
  ) {}

  findGroupsByName(groupPart: string) {
    const groupPath = path.resolve(
      './src/modules/autocomplete/data/groups.json',
    );
    const raw = fs.readFileSync(groupPath, { encoding: 'utf-8' });
    const groups = JSON.parse(raw).groups;
    return {
      groups: groups.filter((group) =>
        group.toLowerCase().includes(groupPart.toLowerCase()),
      ),
    };
  }

  async findLessonsByName(lessonPart: string) {
    const regex = new RegExp(lessonPart, 'i');
    const result = await this.lessonModel
      .find({
        name: {
          $regex: regex,
        },
      })
      .limit(10);

    return result.map((item) => ({
      name: item.name,
      group: item.group,
      id: item._id,
    }));
  }
}
