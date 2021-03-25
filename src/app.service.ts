import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const str = `
    <h1>Todo list API</h1>
    <p>documentation: <span style="font-weight: bold;">/docs</span></p>
    `;
    return str;
  }
}
