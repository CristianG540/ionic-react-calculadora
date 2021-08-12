import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Models
import { calculatorState } from './models/calculator.interfaces';

//==========
// Slice
//==========
export const initialState: calculatorState = {
  value: 0
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setNewValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
});

//==========
// Reducer
//==========
export const calculatorReducer = calculatorSlice.reducer;

//==========
// Actions
//==========
export const calculatorActions = calculatorSlice.actions;
