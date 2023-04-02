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

  async findOneById(id: string) {
    return this.teacherModel.findOne({ _id: id });
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
    const payload = { username: teacher.username, sub: teacher._id };
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

    if (lesson.teacherId) {
      return this.teacherModel.findOne({
        _id: lesson.teacherId,
      });
    }

    const teacher = await this.teacherModel.findOne({
      _id: addTeachersLessonDto.teacherId,
    });

    teacher.lessonsIds.push(addTeachersLessonDto.lessonId);

    this.lessonsService.addTeacher(
      addTeachersLessonDto.teacherId,
      addTeachersLessonDto.lessonId,
    );

    return teacher.save();
  }

  async removeTeachersLesson(removeTeachersLessonDto: AddTeachersLessonDto) {
    const teacher = await this.teacherModel.findOne({
      _id: removeTeachersLessonDto.teacherId,
    });

    teacher.lessonsIds = teacher.lessonsIds.filter(
      (lesson) => lesson !== removeTeachersLessonDto.lessonId,
    );

    this.lessonsService.removeTeacher(removeTeachersLessonDto.lessonId);

    return teacher.save();
  }
}
