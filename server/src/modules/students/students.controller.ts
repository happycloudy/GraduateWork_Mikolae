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
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/roles.enum';
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

  @Get('/uuid/:uuid')
  async findOneByUUID(@Param('uuid') uuid: string) {
    return this.studentService.findOneByUUID(uuid);
  }

  @Post()
  @Roles(Role.Student)
  async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }
}
