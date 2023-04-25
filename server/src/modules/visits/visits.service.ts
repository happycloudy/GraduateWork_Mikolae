import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Visit, VisitDocument } from '../../schemas/visit.schema';
import { Model } from 'mongoose';
import { CreateVisitDto } from './dto/create-visit.dto';
import { SubscribeStudentDto } from './dto/subscribe-student.dto';
import { StudentsService } from '../students/students.service';

@Injectable()
export class VisitsService {
  constructor(
    @InjectModel(Visit.name) private visitModel: Model<VisitDocument>,
    private readonly studentsService: StudentsService,
  ) {}

  async create(dto: CreateVisitDto) {
    return await this.visitModel.create({
      ...dto,
      lesson: dto.lessonId,
      teacher: dto.teacherId,
    });
  }

  async findAllByTeacher(teacherId: string) {
    const modelResult = await this.visitModel
      .find({
        teacher: teacherId,
      })
      .populate('lesson')
      .populate('students')
      .limit(10);
    return modelResult.map((item) => ({
      id: item._id,
      date: item.date,
      key: item.key,
      lesson: item.lesson
        ? {
            id: item.lesson._id,
            name: item.lesson.name,
            group: item.lesson.group,
            course: item.lesson.course,
          }
        : item.lesson,
      students: item.students.map((student) => ({
        role: student.role,
        id: student._id,
        name: student.name,
        group: student.group,
        course: student.course,
      })),
    }));
  }

  async findOneById(id: string) {
    return this.visitModel
      .findById(id)
      .populate('teacher', ['_id', 'role', 'name'])
      .populate('lesson');
  }

  async findOneByKey(key: string) {
    return this.visitModel.findOne({
      key: key,
    });
  }

  async subscribeStudent(dto: SubscribeStudentDto) {
    const student = await this.studentsService.findOneById(dto.id);

    if (!student) {
      throw new HttpException('Студент не существует', HttpStatus.FORBIDDEN);
    }

    const visit = await this.visitModel.findOneAndUpdate(
      {
        key: dto.key,
        'students._id': { $ne: student._id },
      },
      {
        $addToSet: {
          students: student,
        },
      },
    );

    if (visit) {
      await visit.save();
      return {
        result: true,
      };
    } else {
      throw new HttpException(
        'Такого ключа не существует',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
