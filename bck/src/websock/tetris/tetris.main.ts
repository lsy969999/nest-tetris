import { TetrisModel } from "./tetris.model";
import { TetrisService } from "./tetris.service";
import { TetrisTicker } from "./tetris.ticker";

export default function TetrisFactory() {
  return {};
}


export function createTetrisService(){
  const model = new TetrisModel()
  const ticker = new TetrisTicker()
  const service = new TetrisService(model, ticker)
  return service;
}