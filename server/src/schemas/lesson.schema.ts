import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Teacher } from './teachers.schema';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
  @Prop()
  name: string;

  @Prop()
  group: string;

  @Prop()
  course: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Teacher' })
  teacher: Teacher;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
