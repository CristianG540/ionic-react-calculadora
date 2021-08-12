import { counterReducer as counter } from './modules/counter/counter.slice';
import { calculatorReducer as calculator } from './modules/calculator/calculator.slice';

export const rootReducer = {
  counter,
  calculator
};
