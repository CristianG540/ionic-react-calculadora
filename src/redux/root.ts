/**
 * Se importan los reducers de cada uno de los slices, y despues se exportan
 * como un solo objeto que va a representar el reducer principal, este reducer
 * principal es el que se utiliza mas adelante para configurar el store en el
 * archivo /redux/configureStore.ts
 */
import { counterReducer as counter } from './modules/counter/counter.slice';
import { calculatorReducer as calculator } from './modules/calculator/calculator.slice';

export const rootReducer = {
  counter,
  calculator
};
