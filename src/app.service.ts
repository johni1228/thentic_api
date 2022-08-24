import { Injectable } from '@nestjs/common';
import { ThenticAPI } from './interface'
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, NFTs!';
  }

}
