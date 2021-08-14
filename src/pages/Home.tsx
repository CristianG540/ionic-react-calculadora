import { FC } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

// Components
import ExploreContainer from '../components/ExploreContainer';

import './Home.css';

// Hooks
import { useAppSelector } from '../hooks/reduxToolkitTypedHooks';
// Selectors
import { selectCounterValue } from '../redux/modules/counter/counter.selector';
import { selectCalculatorValue } from '../redux/modules/calculator/calculator.selector';

const Home: FC = () => {
  const counterValue = useAppSelector(selectCounterValue);
  const calculatorResult = useAppSelector(selectCalculatorValue);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer
          counterValue={counterValue}
          calculatorResult={calculatorResult}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
