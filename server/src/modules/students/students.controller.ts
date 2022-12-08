import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get('/')
  findAll() {
    return this.studentService.findAll();
  }

  @Get('/uuid/:uuid')
  async findOneByUUID(@Param('uuid') uuid: number) {
    return this.studentService.findOneByUUID(uuid);
  }

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }
}
