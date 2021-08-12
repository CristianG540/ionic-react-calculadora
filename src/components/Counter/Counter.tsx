import { FC, useState } from 'react';
import { IonGrid, IonRow, IonCol, IonButton, IonInput } from '@ionic/react';
import './Counter.css';
// Models
import { CounterProps } from './Counter.models';

export const Counter: FC<CounterProps> = ({
  value = 0,
  onClickIncrementBtn,
  onClickDecrementBtn,
  onClickAddAmountBtn
}) => {
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <div id="counter">
      <IonGrid>
        <IonRow className="ion-align-items-center">
          <IonCol>
            <IonButton color="dark" onClick={onClickDecrementBtn}>
              Reducir -
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-center">
            <span id="value">{value}</span>
          </IonCol>
          <IonCol>
            <IonButton color="dark" onClick={onClickIncrementBtn}>
              Incrementar +
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonInput
              type="number"
              inputmode="numeric"
              value={incrementAmount}
              onIonChange={(e) =>
                setIncrementAmount(parseInt(e.detail.value!, 10))
              }
            ></IonInput>
          </IonCol>
          <IonCol>
            <IonButton
              color="dark"
              onClick={() => onClickAddAmountBtn(incrementAmount)}
            >
              Add Amount
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
