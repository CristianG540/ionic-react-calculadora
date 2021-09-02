import { FC } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

// Components
import ExploreContainer from '../components/ExploreContainer/ExploreContainer';

import './Home.css';

// Hooks
import { useAppSelector } from '../hooks/reduxToolkitTypedHooks';
// Selectors
import { selectCounterValue } from '../redux/modules/counter/counter.selector';
import { selectCalculatorValue } from '../redux/modules/calculator/calculator.selector';

/**
 * Este componente/container es la pagina que se encarga de mostrar en pantalla
 * los valores actuales del contador y de la calculadora, haciendo uso del
 * componente 'ExploreContainer'
 *
 * @return {*}
 */
const Home: FC = () => {
  // haciendo uso de los selectores de redux que cree y del hook 'useSelector'
  // de redux toolkit, extraigo del estado global los valores del contador y de
  // la calculadora para despues pasarlos como propiedades al componente 'ExploreContainer'
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
