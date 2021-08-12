import { counterActions } from '../counter.slice';

export type IncrementCounter = ReturnType<typeof counterActions.increment>;
export type DecrementCounter = ReturnType<typeof counterActions.decrement>;
export type IncrementByAmountCounter = ReturnType<
  typeof counterActions.incrementByAmount
>;
