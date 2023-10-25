import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { createTetrisService } from './tetris/tetris.main';
import { TetrisEmitDelegate } from './tetris/tetris.service';
import { Board } from './tetris/tetris.type';

const TO_SERVER = 'toServer';
const TO_CLIENT = 'toClient';
/**
 * 네모만 왼쪽 4칸
 * 나머지 왼쪽 3칸
 */
@WebSocketGateway({
  cors: {
    origin: '*',
  },
  transports: ['websocket'],
})
export class WebsockGateway implements TetrisEmitDelegate {
  private readonly logger = new Logger(WebSocketGateway.name);
  @WebSocketServer()
  private readonly server: Server;
  private readonly tetrisService = createTetrisService()

  @SubscribeMessage(TO_SERVER)
  handleMessage(@MessageBody() message): void {
    const START = 'START';
    const END = 'END';

    const LEFT = 'LEFT';
    const RIGHT = 'RIGHT';
    const UP = 'UP';
    const DOWN = 'DOWN';
    const SPACE = 'SPACE';

    this.logger.log(`message: ${JSON.stringify(message)}`);
    if (message.type === START) {
      
    } else if (message.type === END) {
      
    } else if (message.type === LEFT) {
    } else if (message.type === RIGHT) {
    } else if (message.type === UP) {
    } else if (message.type === DOWN) {
    } else if (message.type === SPACE) {
    }
  }

  /**
   * TetrisEmitDelegate
   * @param boardUid 
   * @param board 
   */
  emit(boardUid: string, board: Board) {
    this.server.emit(TO_CLIENT, {
      type: 'TEST',
      data: { row: 10, col: 20 },
    });
  }
}
