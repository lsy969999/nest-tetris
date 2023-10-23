import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import {
  Brick,
  BrickColor,
  BrickPosition,
  BrickReserved,
  BrickStatus,
  BrickType,
  changeBrickStatusCreateToDropping,
  createBrickLine,
  genBrick,
  nextBrickSelector,
} from './brick.enum';

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
export class WebsockGateway {
  private readonly logger = new Logger(WebSocketGateway.name);
  @WebSocketServer()
  server: Server;
  tick = null;
  game = Array.from({ length: 20 }, () =>
    Array.from(
      { length: 10 },
      (_, index): Brick => [
        BrickType.NONE,
        BrickStatus.NONE,
        BrickPosition.UP,
        BrickColor.NONE,
        BrickReserved.NONE,
      ],
    ),
  );

  private restartGame() {
    this.game = Array.from({ length: 20 }, () =>
      Array.from({ length: 10 }, (_, index): Brick => {
        return [
          BrickType.NONE,
          BrickStatus.NONE,
          BrickPosition.UP,
          BrickColor.NONE,
          BrickReserved.NONE,
        ];
      }),
    );
  }

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
      if (this.tick === null) {
        this.tick = setInterval(() => {
          //brick이 creating인지 dropping인지 체크
          const brickstatus = this.isBrickDropOrCreate(this.game);

          //dropping이 없으면 create하자 NextGenerator에서
          //1 nextselect하고
          if (brickstatus === BrickStatus.NONE) {
            const nextBrick = nextBrickSelector();
            const nextBrickLine = createBrickLine(nextBrick);
            this.game = this.appendNewBrickLineToTop(nextBrickLine, this.game);
            this.game = changeBrickStatusCreateToDropping(this.game);
          }

          if (brickstatus === BrickStatus.CREATING) {
            //NOP
          }

          if (brickstatus === BrickStatus.DROPPING) {
            this.game = this.brickDropping(this.game);
          }

          this.server.emit(TO_CLIENT, {
            type: 'TICK',
            data: { game: this.game },
          });
        }, 1000);

        this.server.emit(TO_CLIENT, {
          type: 'START',
          data: { row: 10, col: 20 },
        });
      }
    } else if (message.type === END) {
      if (this.tick !== null) {
        clearInterval(this.tick);
        this.tick = null;
        this.restartGame();
      }
    } else if (message.type === LEFT) {
    } else if (message.type === RIGHT) {
    } else if (message.type === UP) {
    } else if (message.type === DOWN) {
    } else if (message.type === SPACE) {
    }
  }

  private isAbleDrop(game: Brick[][]): boolean {
    for (let i = game.length - 1; i >= 0; i--) {
      for (let j = 0; j < game[i].length; j++) {
        if (game[i][j][1] === BrickStatus.DROPPING) {
          if (
            game[i + 1][j][1] === BrickStatus.SETTED ||
            game[i - 1][j][1] === BrickStatus.SETTED ||
            game[i][j + 1][1] === BrickStatus.SETTED ||
            game[i][j - 1][1] === BrickStatus.SETTED
          ) {
            return false;
          }
        }
      }
    }
    return true;
  }

  //한칸씩 땡기는
  private brickDropping(game: Brick[][]): Brick[][] {
    for (let i = game.length - 1; i >= 0; i--) {
      for (let j = 0; j < game[i].length; j++) {
        if (game[i][j][1] === BrickStatus.DROPPING) {
          game[i + 1][j] = game[i][j];
          game[i][j] = genBrick();
        }
      }
    }
    return game;
  }

  private appendNewBrickLineToTop(
    brickLine: Brick[][],
    game: Brick[][],
  ): Brick[][] {
    game[0] = brickLine[0];
    game[1] = brickLine[1];
    return game;
  }

  //dropping인지 crating인지 체크
  private isBrickDropOrCreate(game: Brick[][]): BrickStatus {
    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[i].length; j++) {
        if (game[i][j][1] === BrickStatus.DROPPING) {
          return BrickStatus.DROPPING;
        }
        if (game[i][j][1] === BrickStatus.CREATING) {
          return BrickStatus.CREATING;
        }
      }
    }

    return BrickStatus.NONE;
  }

  fetch() {
    this.server.emit(TO_CLIENT, { type: 'FETCH' });
  }
}
