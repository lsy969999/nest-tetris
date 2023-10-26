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
import { Board, TetrisStatus, TetrisInput } from './tetris/tetris.type';

type WsDto<T extends object> = {
  type: string;
  data: T;
}

type TetrisWsDto = {
  boardUid?: string
}

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
  constructor(){
    this.tetrisService.serviceEmitDelegate = this
  }

  @SubscribeMessage(TO_SERVER)
  handleMessage(@MessageBody() message: WsDto<TetrisWsDto>): void {
    this.logger.log(`message: ${JSON.stringify(message)}`);
    const t = message.type;
    const d = message.data;
    if(
      t === TetrisStatus.START ||
      t === TetrisStatus.END ||
      t === TetrisStatus.PAUSE ||
      t === TetrisStatus.RESUME
    ) {
      if (t === TetrisStatus.START) {
        this.tetrisService.start();
      }
      if (t === TetrisStatus.END) {
        const {boardUid} = d;
        console.log(boardUid + 'END')
        this.tetrisService.end(boardUid);
      }
      if (t === TetrisStatus.PAUSE) {
        const {boardUid} = d;
        this.tetrisService.pause(boardUid);
      }
      if (t === TetrisStatus.RESUME) {
        const {boardUid} = d;
        this.tetrisService.resume(boardUid);
      }
    }

    if(
      t === TetrisInput.DOWN ||
      t === TetrisInput.UP ||
      t === TetrisInput.HOLD ||
      t === TetrisInput.LEFT ||
      t === TetrisInput.RIGHT ||
      t === TetrisInput.BELOW
    ) {
      if (t === TetrisInput.DOWN) {
        const {boardUid} = d
        this.tetrisService.inputDown(boardUid);
      }
      if (t === TetrisInput.UP) {
        const {boardUid} = d
        this.tetrisService.inputUp(boardUid);
      }
      if (t === TetrisInput.HOLD) {
        const {boardUid} = d
        this.tetrisService.inputHold(boardUid);
      }
      if (t === TetrisInput.LEFT) {
        const {boardUid} = d
        this.tetrisService.inputLeft(boardUid);
      }
      if (t === TetrisInput.RIGHT) {
        const {boardUid} = d
        this.tetrisService.inputRight(boardUid);
      }
      if (t === TetrisInput.BELOW) {
        const {boardUid} = d
        this.tetrisService.inputBelow(boardUid);
      }
    }
  }

  /**
   * TetrisEmitDelegate
   * @param boardUid 
   * @param board 
   */
  emit(boardUid: string, board: Board) {
    this.server.emit(TO_CLIENT, {
      type: 'TICK',
      data: { boardUid, board },
    });
  }
}
