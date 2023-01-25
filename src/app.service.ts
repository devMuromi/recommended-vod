import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello recommended VOD!';
  }
  getNext(): string {
    return 'next';
  }
}
