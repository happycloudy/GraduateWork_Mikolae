import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from '../../schemas/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private catModel: Model<StudentDocument>,
  ) {}

  async findAll() {
    return this.catModel.find().exec();
  }

  async findOne() {
    return;
  }
}
