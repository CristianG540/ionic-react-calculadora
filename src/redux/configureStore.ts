/**
 * Este archivo se encarga de configurar y exportar el store global de la app
 * ademas exporta los tipos para el store y la funcion dispatch.
 * Para mas informacion sobre este archivo y sobre Redux y Redux toolkit visitar
 * https://redux.js.org/introduction/getting-started
 * https://redux-toolkit.js.org/introduction/getting-started
 */
import { configureStore } from '@reduxjs/toolkit';
// Reducer
import { rootReducer as reducer } from './root';

export const store = configureStore({
  reducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
