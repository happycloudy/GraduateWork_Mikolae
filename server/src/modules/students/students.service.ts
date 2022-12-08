import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from '../../schemas/student.schema';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async findAll() {
    return this.studentModel.find().exec();
  }

  async findOneByUUID(uuid: number) {
    return this.studentModel.findOne({
      uuid: uuid,
    });
  }

  async create(createStudentDto: CreateStudentDto) {
    const existingStudent = await this.studentModel.findOne({
      uuid: createStudentDto.uuid,
    });

    if (existingStudent) {
      return existingStudent;
    } else {
      return this.studentModel.create(createStudentDto);
    }
  }
}
