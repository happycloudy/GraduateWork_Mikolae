import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStudentStrategy extends PassportStrategy(
  Strategy,
  'local-student',
) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'uuid',
      passwordField: 'uuid',
    });
  }

  async validate(uuid: string): Promise<any> {
    const user = await this.authService.validateStudent(uuid);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
