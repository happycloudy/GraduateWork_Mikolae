import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop()
  name: string;

  @Prop()
  group: number;

  @Prop()
  course: string;

  @Prop()
  uuid: string;

  @Prop()
  serverUuid: string;

  @Prop()
  deviceUuid: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
