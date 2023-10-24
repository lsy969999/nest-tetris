export interface TetrisTickerDelegate {
  ticker(boardUid: string);
}

export interface ITetrisTicker {
  setTicker(boardUid: string);
  clearTicker(boardUid: string);
  isExistsTicker(boardUid: string): boolean;
}

type TickerMap = {
  [uid: string]: NodeJS.Timeout;
};

export class TetrisTicker implements ITetrisTicker {
  option = {
    intervalMs: 1000,
  };
  tickerMap: TickerMap = {};
  delegate?: TetrisTickerDelegate;
  setTicker(boardUid: string) {
    if (!this.isExistsTicker(boardUid)) {
      this.tickerMap[boardUid] = setInterval(() => {
        this.delegate.ticker(boardUid);
      }, this.option.intervalMs);
    }
  }
  clearTicker(boardUid: string) {
    clearInterval(this.tickerMap[boardUid]);
    delete this.tickerMap[boardUid];
  }
  isExistsTicker(boardUid: string): boolean {
    return !!this.tickerMap[boardUid];
  }
}
