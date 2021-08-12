import { FC } from 'react';
import { IonContent, IonPage } from '@ionic/react';

import './CalculatorTab.css';

// Components
import { Calculator } from '../../components/Calculator/Calculator';

export const CalculatorTab: FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="fullheight xc">
          <Calculator />
        </div>
      </IonContent>
    </IonPage>
  );
};
