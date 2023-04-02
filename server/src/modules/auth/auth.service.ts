import { Injectable } from '@nestjs/common';
import { TeachersService } from '../teachers/teachers.service';
import { StudentsService } from '../students/students.service';

@Injectable()
export class AuthService {
  constructor(
    private teachersService: TeachersService,
    private studentsService: StudentsService,
  ) {}

  async validateTeacher(username: string, pass: string): Promise<any> {
    const user = await this.teachersService.findOneByUsername(username);

    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { password, ...result } = { ...user._doc };
      return result;
    }
    return null;
  }

  async validateStudent(uuid: string): Promise<any> {
    const user = await this.studentsService.findOneByUUID(uuid);
    if (user && user.uuid === uuid) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return { ...user._doc };
    }
    return null;
  }
}
