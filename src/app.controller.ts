import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: 'Hello World!',
      template: Array(20)
                  .fill(Array(10).fill(0))
    }
  }
}
