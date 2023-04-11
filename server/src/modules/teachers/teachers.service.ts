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

  async findOneById(id: any) {
    return this.teacherModel.findOne({ _id: id }).populate('lessons');
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
      id: teacher._id,
      name: teacher.name,
      username: teacher.username,
      role: teacher.role,
    };
  }

  //TODO: NOT IMPLEMENTED
  async getStudents() {
    return 1;
  }

  async addTeachersLesson(dto: AddTeachersLessonDto) {
    const teacher = await this.findOneById(dto.teacherId);
    const lesson = await this.lessonsService.findOne(dto.lessonId);
    const isLessonAdded = teacher.lessons.some(
      (item) => item._id.toString() === dto.lessonId,
    );

    if (isLessonAdded) {
      return teacher;
    } else {
      teacher.lessons.push(lesson);
      await teacher.save();
      return teacher;
    }
  }

  async removeTeachersLesson(dto: AddTeachersLessonDto) {
    const teacher = await this.findOneById(dto.teacherId);

    teacher.lessons = teacher.lessons.filter(
      (item) => item._id.toString() !== dto.lessonId,
    );
    await teacher.save();

    return teacher;
  }
}
