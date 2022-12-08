import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TeachersModule } from '../teachers/teachers.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [TeachersModule, PassportModule],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
