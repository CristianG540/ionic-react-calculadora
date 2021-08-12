import { FC } from 'react';
import { IonContent, IonPage } from '@ionic/react';

import './CalculatorTab.css';

// Actions
import { calculatorActions } from '../../redux/modules/calculator/calculator.slice';
// Components
import { Calculator } from '../../components/Calculator/Calculator';
// Hooks
import { useAppDispatch } from '../../hooks/reduxToolkitTypedHooks';

export const CalculatorTab: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="fullheight xc">
          <Calculator
            onEvaluateValidResult={(screenValue) => {
              dispatch(calculatorActions.setNewValue(screenValue));
            }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};
