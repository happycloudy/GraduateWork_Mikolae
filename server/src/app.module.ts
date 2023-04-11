import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './modules/students/students.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { AuthModule } from './modules/auth/auth.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from '../config/configuration';
import { VisitsModule } from './modules/visits/visits.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_DB_URI'),
        user: '',
        pass: '',
        authSource: configService.get('MONGO_DB_NAME'),
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/config/env/.env.${process.env.NODE_ENV}`,
      load: [configuration],
    }),
    StudentsModule,
    TeachersModule,
    LessonsModule,
    AuthModule,
    VisitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
