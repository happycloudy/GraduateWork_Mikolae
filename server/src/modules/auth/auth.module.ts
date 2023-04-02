import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TeachersModule } from '../teachers/teachers.module';
import { PassportModule } from '@nestjs/passport';
import { LocalTeacherStrategy } from './strategies/local-teacher.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { StudentsModule } from '../students/students.module';
import { LocalStudentStrategy } from './strategies/local-student.strategy';

@Module({
  imports: [
    TeachersModule,
    StudentsModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    AuthService,
    LocalTeacherStrategy,
    LocalStudentStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
