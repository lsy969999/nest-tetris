export function getRandomInt(from: number, to: number): number {
  if (from > to) {
    throw new Error("'from' must be less than or equal to 'to'");
  }
  // from부터 to까지 (포함) 랜덤한 정수 생성
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
