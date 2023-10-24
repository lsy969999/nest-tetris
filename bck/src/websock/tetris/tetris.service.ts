import { ITetrisModel } from "./tetris.model";
import { ITetrisTicker, TetrisTicker, TetrisTickerDelegate } from "./tetris.ticker";

interface TetrisInputControl{
  inputUp();
  inputLeft();
  inputRight();
  inputDown();
  inputHold();
}

interface TetrisStatusControl{
  start();
  end();
  pause();
}

export interface TetrisTickerEmitDelegate {
  tickerEmit();
}

export interface ITetrisService extends TetrisInputControl, TetrisStatusControl{}

export class TetrisService implements ITetrisService, TetrisTickerDelegate{
  private readonly logger = console;
  tickerEmitDelegate?: TetrisTickerEmitDelegate
  constructor(
    private readonly tetrisModel: ITetrisModel,
    private readonly tetrisTicker: ITetrisTicker,
  ){}

  inputUp() {
    throw new Error("Method not implemented.");
  }
  inputLeft() {
    throw new Error("Method not implemented.");
  }
  inputRight() {
    throw new Error("Method not implemented.");
  }
  inputDown() {
    throw new Error("Method not implemented.");
  }
  inputHold() {
    throw new Error("Method not implemented.");
  }

  start() {
    throw new Error("Method not implemented.");
  }
  end() {
    throw new Error("Method not implemented.");
  }
  pause() {
    throw new Error("Method not implemented.");
  }

  ticker() {
    throw new Error("Method not implemented.");
  }
}