import { FC } from 'react';
import { IonButton, IonCol, IonGrid, IonRow, IonTextarea } from '@ionic/react';
import './Calculator.css';

export const Calculator: FC = () => {
  return (
    <div id="calculator">
      <IonGrid>
        <IonRow className="ion-align-items-center">
          <IonCol>
            <IonTextarea
              id="calculator-screen"
              disabled
              value={'0'}
              onIonChange={(e) => e.detail.value!}
            ></IonTextarea>
          </IonCol>
        </IonRow>

        <IonRow className="ion-align-items-center ion-text-center">
          <IonCol size="9">
            <IonButton
              expand="full"
              size="small"
              color="dark"
              onClick={() => 'AC'}
            >
              AC
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton
              expand="full"
              size="small"
              color="dark"
              onClick={() => '+'}
            >
              +
            </IonButton>
          </IonCol>
        </IonRow>

        <IonRow className="ion-align-items-center ion-text-center">
          {['7', '8', '9', '/'].map((text, key) => (
            <IonCol key={key}>
              <IonButton
                expand="full"
                size="small"
                color="dark"
                onClick={() => text}
              >
                {text}
              </IonButton>
            </IonCol>
          ))}
        </IonRow>

        <IonRow className="ion-align-items-center ion-text-center">
          {['4', '5', '6', '*'].map((text, key) => (
            <IonCol key={key}>
              <IonButton
                expand="full"
                size="small"
                color="dark"
                onClick={() => text}
              >
                {text}
              </IonButton>
            </IonCol>
          ))}
        </IonRow>

        <IonRow className="ion-align-items-center ion-text-center">
          {['1', '2', '3', '-'].map((text, key) => (
            <IonCol key={key}>
              <IonButton
                expand="full"
                size="small"
                color="dark"
                onClick={() => text}
              >
                {text}
              </IonButton>
            </IonCol>
          ))}
        </IonRow>

        <IonRow className="ion-align-items-center ion-text-center">
          <IonCol size="6">
            <IonButton
              expand="full"
              size="small"
              color="dark"
              onClick={() => '0'}
            >
              0
            </IonButton>
          </IonCol>
          {['.', '='].map((text, key) => (
            <IonCol key={key}>
              <IonButton
                expand="full"
                size="small"
                color="dark"
                onClick={() => text}
              >
                {text}
              </IonButton>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};
