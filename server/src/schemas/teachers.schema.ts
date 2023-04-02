import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Lesson } from './lesson.schema';

export type TeacherDocument = HydratedDocument<Teacher>;

@Schema()
export class Teacher {
  @Prop({ default: 'teacher' })
  role: 'teacher';

  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({
    default: [],
  })
  lessonsIds: string[];

  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Lesson' }],
    default: undefined,
  })
  lessons: Lesson[];
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
