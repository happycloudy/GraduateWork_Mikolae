import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher, TeacherDocument } from '../../schemas/teachers.schema';
import { Model } from 'mongoose';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { JwtService } from '@nestjs/jwt';
import { AddTeachersLessonDto } from './dto/add-teachers-lesson.dto';
import { LessonsService } from '../lessons/lessons.service';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>,
    private jwtService: JwtService,
    private lessonsService: LessonsService,
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

  //TODO: NOT IMPLEMENTED
  async getStudents() {
    return 1;
  }

  async addTeachersLesson(addTeachersLessonDto: AddTeachersLessonDto) {
    const lesson = await this.lessonsService.findOne(
      addTeachersLessonDto.lessonId,
    );

    if (lesson.teacher) {
      return this.teacherModel.findOne({
        _id: lesson.teacher,
      });
    }

    const teacher = await this.teacherModel.findOne({
      _id: addTeachersLessonDto.teacherId,
    });
    teacher.lessons.push(addTeachersLessonDto.lessonId);

    this.lessonsService.addTeacher(
      addTeachersLessonDto.teacherId,
      addTeachersLessonDto.lessonId,
    );

    return teacher.save();
  }
}
