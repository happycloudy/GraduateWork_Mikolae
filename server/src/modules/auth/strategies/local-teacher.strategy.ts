import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalTeacherStrategy extends PassportStrategy(
  Strategy,
  'local-teacher',
) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateTeacher(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
