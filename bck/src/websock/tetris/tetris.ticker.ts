export interface TetrisTickerDelegate {
  ticker();
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITetrisTicker {}

export class TetrisTicker implements ITetrisTicker {
  delegate?: TetrisTickerDelegate;
}
