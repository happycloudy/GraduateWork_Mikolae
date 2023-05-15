import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from '../../schemas/student.schema';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
    private jwtService: JwtService,
  ) {}

  async findAll() {
    return this.studentModel.find().exec();
  }

  async findOneByUUID(uuid: string) {
    return this.studentModel.findOne({
      uuid: uuid,
    });
  }

  async findOneById(id: string) {
    return this.studentModel.findOne({
      _id: id,
    });
  }

  async findOneByGroup(group: string) {
    return this.studentModel.find({
      group: group
    })
  }

  async signIn(student: any) {
    const payload = { username: student.name, sub: student._id };
    return {
      access_token: this.jwtService.sign(payload),
      role: student.role,
      name: student.name,
      group: student.group,
      course: student.course,
      id: student._id,
    };
  }

  async create(createStudentDto: CreateStudentDto) {
    const existingStudent = await this.studentModel.findOne({
      uuid: createStudentDto.uuid,
    });

    if (existingStudent) {
      throw new HttpException(
        'Студент уже зарегистрирован на этом устройстве, вернитесь на страницу входа',
        HttpStatus.FORBIDDEN,
      );
    } else {
      return this.studentModel.create(createStudentDto);
    }
  }
}
