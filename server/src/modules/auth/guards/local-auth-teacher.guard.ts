import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthTeacherGuard extends AuthGuard('local-teacher') {}
