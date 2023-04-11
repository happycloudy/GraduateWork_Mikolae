import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import mongoose from 'mongoose';
import { LessonDocument } from './lesson.schema';
import { TeacherDocument } from './teachers.schema';
import { StudentDocument } from './student.schema';

export type VisitDocument = HydratedDocument<Visit>;

@Schema()
export class Visit {
  @Prop()
  date: Date;

  @Prop()
  key: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
  })
  teacher: TeacherDocument;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
  })
  lesson: LessonDocument;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
      },
    ],
  })
  students: StudentDocument[];
}

export const VisitSchema = SchemaFactory.createForClass(Visit);
