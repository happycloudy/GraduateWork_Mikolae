import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { AddTeachersLessonDto } from './dto/add-teachers-lesson.dto';
import { Public } from '../auth/decorators/public.decorator';
import { LocalAuthTeacherGuard } from '../auth/guards/local-auth-teacher.guard';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {
    this.teachersService.create({
      name: 'admin',
      username: 'admin',
      password: '123456',
    });
  }

  @Public()
  @UseGuards(LocalAuthTeacherGuard)
  @Post('/signin')
  async signIn(@Request() req) {
    return this.teachersService.signIn(req.user);
  }

  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Get('/students')
  getStudents() {
    return this.teachersService.getStudents();
  }

  @Patch('lessons/add')
  addTeachersLesson(@Body() addTeacherLessonDto: AddTeachersLessonDto) {
    return this.teachersService.addTeachersLesson(addTeacherLessonDto);
  }

  @Patch('lessons/remove')
  removeTeachersLesson(@Body() removeTeacherLessonDto: AddTeachersLessonDto) {
    return this.teachersService.removeTeachersLesson(removeTeacherLessonDto);
  }
}
