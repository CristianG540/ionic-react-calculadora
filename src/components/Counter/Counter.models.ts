export interface CounterProps {
  value: number;
  onClickIncrementBtn: () => void;
  onClickDecrementBtn: () => void;
  onClickAddAmountBtn: (incrementAmount: number) => void;
}
