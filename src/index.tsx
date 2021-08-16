import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Components
import App from './App';

// Store
/**
 * Importo el store de redux, este se encarga de manejar el estado
 * global de la aplicación
 */
import { store } from './redux/configureStore';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// Almaceno el elemento html con el id 'root'
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

// Punto inicial de la app, react se encarga de renderizar la app en el
// elemento almacenado en MOUNT_NODE
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  MOUNT_NODE
);

/* ----------------------- Service Worker y Web Vitals ----------------------- */
// Ionic genera este codigo automaticamente

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
