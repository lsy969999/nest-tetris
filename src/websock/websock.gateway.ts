import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';
import {Logger} from '@nestjs/common'

const TO_SERVER = 'toServer'
const TO_CLIENT = 'toClient'

@WebSocketGateway({
    cors: {
        origin: '*'
    },
    transports: ['websocket']
})
export class WebsockGateway {
    private readonly logger = new Logger(WebSocketGateway.name);
    @WebSocketServer()
    server: Server

    @SubscribeMessage(TO_SERVER)
    handleMessage(@MessageBody() message: unknown): void {
        this.logger.log(`message: ${JSON.stringify(message)}`)
        this.server.emit(TO_CLIENT, message);
    }
}