import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher, TeacherDocument } from '../../schemas/teachers.schema';
import { Model } from 'mongoose';
import { CreateTeacherDto } from '../../schemas/dto/create-teacher.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>,
    private jwtService: JwtService,
  ) {}

  async findOneByUsername(username: string) {
    return this.teacherModel.findOne({ username: username });
  }

  async create(createTeacherDto: CreateTeacherDto) {
    const existingTeacher = await this.teacherModel.findOne({
      username: createTeacherDto.username,
    });

    return existingTeacher
      ? existingTeacher
      : this.teacherModel.create(createTeacherDto);
  }

  async signIn(teacher: any) {
    const payload = { username: teacher.username, sub: teacher.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
