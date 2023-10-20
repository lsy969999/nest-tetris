import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsockModule } from './websock/websock.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WebsockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
