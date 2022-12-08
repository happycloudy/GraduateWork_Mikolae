import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
  @Prop()
  name: string;

  @Prop()
  group: string;

  @Prop()
  course: number;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
