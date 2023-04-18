import { Module } from '@nestjs/common';
import { MockService } from './mock.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson, LessonSchema } from '../../schemas/lesson.schema';
import { LessonsModule } from '../lessons/lessons.module';

@Module({
  providers: [MockService],
  imports: [
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }]),
    LessonsModule,
  ],
})
export class MockModule {}
