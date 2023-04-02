import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop({ default: 'student' })
  role: 'student';

  @Prop()
  name: string;

  @Prop()
  group: string;

  @Prop()
  course: number;

  @Prop()
  uuid: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
