import { FC } from 'react';
import { IonContent, IonPage } from '@ionic/react';

import './CalculatorTab.css';

// Actions
import { calculatorActions } from '../../redux/modules/calculator/calculator.slice';
// Components
import { Calculator } from '../../components/Calculator/Calculator';
// Hooks
import { useAppDispatch } from '../../hooks/reduxToolkitTypedHooks';

/**
 * Este componente/container es la pagina que se encarga de manejar el estado
 * global y renderizar el componente Calculator
 */
export const CalculatorTab: FC = () => {
  // hago uso del hook useAppDispatch para declarar localmente la funcion
  // dispatch, para despachar las acciones de redux que necesite mas adelante
  const dispatch = useAppDispatch();

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="fullheight xc">
          <Calculator
            onEvaluateValidResult={(screenValue) => {
              // El evento 'onEvalueteValidResult' se lanza cada vez que se
              // evalua una formula valida en la calculadora.

              // cuando se lanza este evento despacho la accion 'setNewValue' que
              // se encarga de actualizar el estado de la calculadora con el nuevo resultado
              dispatch(calculatorActions.setNewValue(screenValue));
            }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};
