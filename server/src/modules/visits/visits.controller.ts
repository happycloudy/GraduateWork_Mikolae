import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateVisitDto } from './dto/create-visit.dto';
import { VisitsService } from './visits.service';
import { SubscribeStudentDto } from './dto/subscribe-student.dto';

@Controller('visits')
export class VisitsController {
  constructor(private readonly visitsService: VisitsService) {}

  @Post()
  createVisit(@Body() dto: CreateVisitDto) {
    return this.visitsService.create(dto);
  }

  @Get(':id')
  findOneVisit(@Param('id') id: string) {
    return this.visitsService.findOneById(id);
  }

  @Patch('/subscribeStudent/')
  subscribeStudent(@Body() dto: SubscribeStudentDto) {
    return this.visitsService.subscribeStudent(dto);
  }
}
