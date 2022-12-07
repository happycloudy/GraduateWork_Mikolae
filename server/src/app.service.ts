import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  Ping(): string {
    return 'Pong!';
  }
}
