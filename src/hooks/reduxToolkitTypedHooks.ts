/**
 * Crear Hooks Tipados
 *
 * Si bien es posible importar los tipos 'RootState' y 'AppDispatch' en cada
 * componente, es mejor crear versiones tipadas de los hooks 'useDispatch' y
 * 'useSelector' para su uso en la aplicación. Esto es importante por un par de
 * razones:
 *
 * * Para 'useSelector', se ahorra la necesidad de escribir (state: RootState)
 *   todo el tiempo
 * * Para 'useDispatch': El 'type' predeterminado 'Dispatch' no reconoce los
 *   thunks. Para despachar correctamente los thunks, se debe importar el 'type'
 *   personalizado 'AppDispatch' desde el store, este incluye los 'types' para
 *   el middleware 'thunk'. Una vez importado se debe usar junto con el hook
 *   'useDispatch'.
 *
 *   Crear un hook tipado personalizado que envuelva el hook 'useDispatch' evita que
 *   se olvide importar el 'type' AppDispatch donde sea necesario.
 *
 * Dado que estas son variables reales, no tipos, es importante definirlas en un
 * archivo separado como app/hooks.ts, no en el archivo de configuración del
 * store. Esto permite importarlos a cualquier componente que necesite usar los
 * hooks y evita posibles problemas de dependencia circular.
 *
 * Mas info: https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Models
import type { RootState, AppDispatch } from '../redux/configureStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
