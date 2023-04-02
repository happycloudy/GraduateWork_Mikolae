import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Public } from '../auth/decorators/public.decorator';
import { LocalAuthStudentGuard } from '../auth/guards/local-auth-student.guard';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get('/')
  findAll() {
    return this.studentService.findAll();
  }

  @Public()
  @UseGuards(LocalAuthStudentGuard)
  @Post('/signin')
  async signIn(@Request() req) {
    return this.studentService.signIn(req.user);
  }

  // @Roles(Role.Teacher)
  @Get('/uuid/:uuid')
  async findOneByUUID(@Param('uuid') uuid: string) {
    return this.studentService.findOneByUUID(uuid);
  }

  @Public()
  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }
}
