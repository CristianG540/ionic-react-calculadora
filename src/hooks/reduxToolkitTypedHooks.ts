// More info about the reason i created this file: https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Models
import type { RootState, AppDispatch } from '../redux/configureStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
