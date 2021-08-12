import { FC } from 'react';
import {
  IonContent,
  // IonHeader,
  IonPage
  // IonTitle,
  // IonToolbar
} from '@ionic/react';

// Actions
import { counterActions } from '../redux/modules/counter/counter.slice';
// Components
import { Counter } from '../components/Counter/Counter';
//import ExploreContainer from '../components/ExploreContainer';
// Hooks
import {
  useAppDispatch,
  useAppSelector
} from '../hooks/reduxToolkitTypedHooks';
// Selectors
import { selectCounterValue } from '../redux/modules/counter/counter.selector';

import './Home.css';

const Home: FC = () => {
  ////////// Counter Home Page
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCounterValue);

  // Event Handlers
  const onClickDecrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const onClickIncrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const onClickIncrementByAmountHandler = (incrementAmount: number) => {
    dispatch(counterActions.incrementByAmount(incrementAmount));
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="fullheight xc">
          <Counter
            value={counter}
            onClickDecrementBtn={onClickDecrementHandler}
            onClickIncrementBtn={onClickIncrementHandler}
            onClickAddAmountBtn={onClickIncrementByAmountHandler}
          />
        </div>
      </IonContent>
    </IonPage>
  );
  ////////// Counter Home Page

  // Old Home Page

  // return (
  //   <IonPage>
  //     <IonHeader>
  //       <IonToolbar>
  //         <IonTitle>Blank</IonTitle>
  //       </IonToolbar>
  //     </IonHeader>
  //     <IonContent fullscreen>
  //       <IonHeader collapse="condense">
  //         <IonToolbar>
  //           <IonTitle size="large">Blank</IonTitle>
  //         </IonToolbar>
  //       </IonHeader>
  //       <ExploreContainer />
  //     </IonContent>
  //   </IonPage>
  // );
};

export default Home;
