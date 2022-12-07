import { Controller, Get, Param } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get('/')
  findAll() {
    return this.studentService.findAll();
  }

  @Get('/:deviceId')
  findOne(@Param('deviceId') deviceId: string) {
    return deviceId;
  }
}
