import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Role } from '../modules/auth/enums/roles.enum';
import { Lesson, LessonDocument } from './lesson.schema';

export type TeacherDocument = HydratedDocument<Teacher>;

@Schema()
export class Teacher {
  @Prop({ default: 'teacher' })
  role: Role;

  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Lesson.name }] })
  lessons: LessonDocument[];
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
