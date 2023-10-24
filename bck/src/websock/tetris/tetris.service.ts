import { ITetrisModel } from './tetris.model';
import { ITetrisTicker, TetrisTickerDelegate } from './tetris.ticker';

interface TetrisInputControl {
  inputUp();
  inputLeft();
  inputRight();
  inputDown();
  inputHold();
}

interface TetrisStatusControl {
  start(): string;
  end();
  pause();
}

export interface TetrisTickerEmitDelegate {
  tickerEmit();
}

export interface ITetrisService
  extends TetrisInputControl,
    TetrisStatusControl {}

export class TetrisService implements ITetrisService, TetrisTickerDelegate {
  private readonly logger = console;
  tickerEmitDelegate?: TetrisTickerEmitDelegate;
  constructor(
    private readonly tetrisModel: ITetrisModel,
    private readonly tetrisTicker: ITetrisTicker,
  ) {}
  start(): string {
    const boardUid = this.tetrisModel.createBoard();

    return boardUid;
  }
  end() {
    throw new Error('Method not implemented.');
  }
  pause() {
    throw new Error('Method not implemented.');
  }

  inputUp() {
    throw new Error('Method not implemented.');
  }
  inputLeft() {
    throw new Error('Method not implemented.');
  }
  inputRight() {
    throw new Error('Method not implemented.');
  }
  inputDown() {
    throw new Error('Method not implemented.');
  }
  inputHold() {
    throw new Error('Method not implemented.');
  }

  ticker() {
    throw new Error('Method not implemented.');
  }
}
