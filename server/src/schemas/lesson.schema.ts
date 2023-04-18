import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Teacher, TeacherDocument } from './teachers.schema';
import mongoose from 'mongoose';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
  @Prop()
  name: string;

  @Prop()
  group: string;

  @Prop()
  course: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
  })
  teacher: TeacherDocument;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
