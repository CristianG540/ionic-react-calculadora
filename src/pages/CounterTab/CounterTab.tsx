import { FC } from 'react';
import { IonContent, IonPage } from '@ionic/react';

// Actions
import { counterActions } from '../../redux/modules/counter/counter.slice';
// Components
import { Counter } from '../../components/Counter/Counter';
// Hooks
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks/reduxToolkitTypedHooks';
// Selectors
import { selectCounterValue } from '../../redux/modules/counter/counter.selector';

import './CounterTab.css';

export const CounterTab: FC = () => {
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
};
