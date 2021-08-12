import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Models
import { CounterState } from './models/counter.interfaces';

//==========
// Slice
//==========
export const initialState: CounterState = {
  value: 10
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

//==========
// Reducer
//==========
export const counterReducer = counterSlice.reducer;

//==========
// Actions
//==========
export const counterActions = counterSlice.actions;
