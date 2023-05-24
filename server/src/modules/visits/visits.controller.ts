import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { CreateVisitDto } from './dto/create-visit.dto';
import { VisitsService } from './visits.service';
import { SubscribeStudentDto } from './dto/subscribe-student.dto';
import { FilterDto } from './dto/filter.dto';

@Controller('visits')
export class VisitsController {
  constructor(private readonly visitsService: VisitsService) {}

  @Post()
  createVisit(@Body() dto: CreateVisitDto) {
    return this.visitsService.create(dto);
  }

  @Get('/id/:id')
  findOneVisit(@Param('id') id: string) {
    return this.visitsService.findOneById(id);
  }

  @Get()
  findVisits(@Req() req: any) {
    return this.visitsService.findAllByTeacher(req.user.userId);
  }

  @Patch('/subscribeStudent/')
  subscribeStudent(@Body() dto: SubscribeStudentDto) {
    return this.visitsService.subscribeStudent(dto);
  }

  @Post('/table')
  findGroupVisits(@Body() filter: FilterDto) {
    return this.visitsService.findAllByFilter(filter)
  }
}
