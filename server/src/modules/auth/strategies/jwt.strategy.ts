import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants';
import { TeachersService } from '../../teachers/teachers.service';
import { StudentsService } from '../../students/students.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly teachersService: TeachersService,
    private readonly studentsService: StudentsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    const teacher = await this.teachersService.findOneById(payload.sub);

    if (teacher) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { password, _id, __v, ...savedTeacher } = { ...teacher._doc };
      return { userId: payload.sub, ...savedTeacher };
    }

    const student = await this.studentsService.findOneById(payload.sub);

    if (student) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { password, _id, __v, ...savedStudent } = { ...student._doc };
      return { userId: payload.sub, ...savedStudent };
    }

    return { userId: payload.sub, username: payload.username };
  }
}
