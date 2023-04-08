import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './modules/students/students.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { AuthModule } from './modules/auth/auth.module';
import { LessonsModule } from './modules/lessons/lessons.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://database/graduateApp'),
    StudentsModule,
    TeachersModule,
    LessonsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
