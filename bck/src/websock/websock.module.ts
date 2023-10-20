import { Module } from '@nestjs/common';
import { WebsockGateway } from './websock.gateway';

@Module({
  providers: [WebsockGateway],
})
export class WebsockModule {}
