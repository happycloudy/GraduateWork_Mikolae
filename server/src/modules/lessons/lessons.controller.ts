import { Body, Controller, Get, Post } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Controller('lessons')
export class LessonsController {
  constructor(private lessonsService: LessonsService) {}

  @Get()
  async getLessons() {
    return this.lessonsService.getLessons();
  }

  @Post()
  async create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.create(createLessonDto);
  }
}
