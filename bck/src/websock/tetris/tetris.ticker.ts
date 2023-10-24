export interface TetrisTickerDelegate {
  ticker();
}

export interface ITetrisTicker{

}

export class TetrisTicker implements ITetrisTicker{
  delegate?: TetrisTickerDelegate;
}