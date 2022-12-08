import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { CreateTeacherDto } from '../../schemas/dto/create-teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Request() req) {
    return this.teachersService.signIn(req.user);
  }

  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }
}
