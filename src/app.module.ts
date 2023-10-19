import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsockModule } from './websock/websock.module';

@Module({
  imports: [WebsockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
