import { Module } from '@nestjs/common';
import { VisitsController } from './visits.controller';
import { VisitsService } from './visits.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Visit, VisitSchema } from '../../schemas/visit.schema';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Visit.name, schema: VisitSchema }]),
    StudentsModule,
  ],
  controllers: [VisitsController],
  providers: [VisitsService],
})
export class VisitsModule {}
