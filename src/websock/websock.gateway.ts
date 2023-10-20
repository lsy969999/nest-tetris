import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';
import {Logger} from '@nestjs/common'

const TO_SERVER = 'toServer'
const TO_CLIENT = 'toClient'
/**
 * 네모만 왼쪽 4칸
 * 나머지 왼쪽 3칸
 * 
*/
@WebSocketGateway({
    cors: {
        origin: '*'
    },
    transports: ['websocket']
})
export class WebsockGateway {
    private readonly logger = new Logger(WebSocketGateway.name);
    @WebSocketServer()
    server: Server;
    tick = null;

    @SubscribeMessage(TO_SERVER)
    handleMessage(@MessageBody() message): void {
        const START = 'START';
        const END = 'END';

        const LEFT = 'LEFT';
        const RIGHT = 'RIGHT';
        const UP = 'UP';
        const DOWN = 'DOWN';
        const SPACE = 'SPACE';

        this.logger.log(`message: ${JSON.stringify(message)}`)
        if(message.type === START){
            if(this.tick === null){
                this.tick = setInterval(()=>{
                    this.server.emit(TO_CLIENT, {type: 'TICK'});
                }, 1000)
            }
        } else if (message.type === END){
            if(this.tick !== null){
                clearInterval(this.tick);
                this.tick = null;
            }
        } else if (message.type === LEFT){

        } else if (message.type === RIGHT){

        } else if (message.type === UP){

        } else if (message.type === DOWN){

        } else if (message.type === SPACE){

        }
    }

    fetch(){
        this.server.emit(TO_CLIENT, {type: 'FETCH'});
    }
}