import { ITetrisModel } from './tetris.model';
import {
  changeBrickStatusGenToDrop,
  isBrickDropOrGen,
} from './tetris.servce.util';
import { genBrickBoard, getRandomNextBrick } from './tetris.service.gen.util';
import {
  moveBrickBelow,
  moveBrickLeft,
  moveBrickRight,
  rotateBrickColckWise,
  rotateBrickCounterClockWise,
} from './tetris.service.move.util';
import {
  isTickAble,
  tickBoardDropBrick,
  tickBoardSetBrick,
} from './tetris.service.ticker.util';
import { ITetrisTicker, TetrisTickerDelegate } from './tetris.ticker';
import { Board, BrickStatus } from './tetris.type';

interface TetrisInputControl {
  inputUp(boardUid: string);
  inputLeft(boardUid: string);
  inputRight(boardUid: string);
  inputDown(boardUid: string);
  inputBelow(boardUid: string);
  inputHold(boardUid: string);
}

interface TetrisStatusControl {
  start(): string;
  end(boardUid: string);
  pause(boardUid: string);
  resume(boardUid: string);
}

export interface TetrisEmitDelegate {
  emit(boardUid: string, board: Board);
}

export interface ITetrisService
  extends TetrisInputControl,
    TetrisStatusControl {}

export class TetrisService implements ITetrisService, TetrisTickerDelegate {
  private readonly logger = console;
  serviceEmitDelegate?: TetrisEmitDelegate;
  constructor(
    private readonly tetrisModel: ITetrisModel,
    private readonly tetrisTicker: ITetrisTicker,
  ) {
    this.tetrisTicker.delegate = this;
  }
  start(): string {
    const boardUid = this.tetrisModel.createBoard();
    this.tetrisTicker.setTicker(boardUid);
    return boardUid;
  }
  end(boardUid: string) {
    this.tetrisModel.removeBoard(boardUid);
    this.tetrisTicker.clearTicker(boardUid);
  }
  pause(boardUid: string) {
    this.tetrisTicker.clearTicker(boardUid);
  }
  resume(boardUid: string) {
    this.tetrisTicker.setTicker(boardUid);
  }

  inputUp(boardUid: string) {
    const selected = this.tetrisModel.selectBoard(boardUid);
    const result = rotateBrickColckWise(selected.board);
    this.tetrisModel.updateBoard(selected.uid, result);
    this.serviceEmitDelegate.emit(boardUid, result);
  }
  inputLeft(boardUid: string) {
    const selected = this.tetrisModel.selectBoard(boardUid);
    const result = moveBrickLeft(selected.board);
    this.tetrisModel.updateBoard(selected.uid, result);
    this.serviceEmitDelegate.emit(boardUid, result);
  }
  inputRight(boardUid: string) {
    const selected = this.tetrisModel.selectBoard(boardUid);
    const result = moveBrickRight(selected.board);
    this.tetrisModel.updateBoard(selected.uid, result);
    this.serviceEmitDelegate.emit(boardUid, result);
  }
  inputDown(boardUid: string) {
    const selected = this.tetrisModel.selectBoard(boardUid);
    const result = rotateBrickCounterClockWise(selected.board);
    this.tetrisModel.updateBoard(selected.uid, result);
    this.serviceEmitDelegate.emit(boardUid, result);
  }
  inputBelow(boardUid: string) {
    const selected = this.tetrisModel.selectBoard(boardUid);
    const result = moveBrickBelow(selected.board);
    this.tetrisModel.updateBoard(selected.uid, result);
    this.serviceEmitDelegate.emit(boardUid, result);
  }
  inputHold(boardUid: string) {
    throw new Error('Method not implemented.');
  }

  /**
   * 1. check drop or creating or none
   */
  ticker(boardUid: string) {
    this.logger.log(`[ticker] boardUid: ${boardUid}`);
    const selected = this.tetrisModel.selectBoard(boardUid);
    const ibdog = isBrickDropOrGen(selected.board);
    if (ibdog === BrickStatus.NONE) {
      const nextBrick = getRandomNextBrick();
      const gbb = genBrickBoard(nextBrick);
      selected.board[0] = gbb[0];
      selected.board[1] = gbb[1];
      this.tetrisModel.updateBoard(boardUid, selected.board);
    } else if (ibdog === BrickStatus.GENERATING) {
      changeBrickStatusGenToDrop(selected.board);
      this.tetrisModel.updateBoard(boardUid, selected.board);
    } else {
      //DROPPING
      const tickable = isTickAble(selected.board);
      if (tickable) {
        selected.board = tickBoardDropBrick(selected.board);
      } else {
        selected.board = tickBoardSetBrick(selected.board);
      }
      this.tetrisModel.updateBoard(boardUid, selected.board);
    }
    this.serviceEmitDelegate.emit(boardUid, selected.board);
  }
}
