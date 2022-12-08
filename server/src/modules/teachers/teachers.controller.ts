import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

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

  @UseGuards(JwtAuthGuard)
  @Get('/students')
  getStudents() {
    return this.teachersService.getStudents();
  }
}
