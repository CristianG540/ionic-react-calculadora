// Models
import { RootState } from '../../configureStore';

export const selectCalculatorValue = (state: RootState) =>
  state.calculator.value;
