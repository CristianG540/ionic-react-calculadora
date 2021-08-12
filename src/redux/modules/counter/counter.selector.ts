// Models
import { RootState } from '../../configureStore';

// The function below is called a selector and allows to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in a new file. For example: `useSelector((state) => state.counter.value)`
export const selectCounterValue = (state: RootState) => state.counter.value;
