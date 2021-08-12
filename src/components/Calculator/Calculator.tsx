import { FC, useState } from 'react';
import { IonButton, IonCol, IonGrid, IonRow, IonTextarea } from '@ionic/react';
import { evaluate } from 'mathjs';
import './Calculator.css';

export interface CalculatorProps {
  onEvaluateValidResult: (screenValue: number) => void;
}

export const Calculator: FC<CalculatorProps> = ({ onEvaluateValidResult }) => {
  const [screenValue, setScreenValue] = useState('0');
  const [isChanged, setIsChanged] = useState(false);
  const [wasEvaluated, setWasEvaluated] = useState(false);

  const onClickBtnAction = (buttonValue: string) => {
    if (buttonValue === 'AC') {
      setScreenValue('0');
      setIsChanged(false);
    } else if (buttonValue === '=') {
      try {
        const newScreenValue: string = evaluate(screenValue).toString();

        if (newScreenValue === 'Infinity') {
          setIsChanged(false);
        } else {
          setIsChanged(true);
          onEvaluateValidResult(parseFloat(newScreenValue));
        }

        setScreenValue(newScreenValue);
        setWasEvaluated(true);
      } catch (_) {
        setScreenValue('Malformed expression');
        setIsChanged(false);
      }
    } else if (wasEvaluated) {
      const isAnOperator = !!['+', '/', '*', '-'].find(
        (operator) => operator === buttonValue
      );
      const newScreenValue = isAnOperator
        ? screenValue + buttonValue
        : buttonValue;

      setScreenValue(newScreenValue);
      setIsChanged(true);
      setWasEvaluated(false);
    } else {
      const newScreenValue = isChanged
        ? screenValue + buttonValue
        : buttonValue;

      setScreenValue(newScreenValue);
      setIsChanged(true);
    }
  };

  return (
    <div id="calculator">
      <IonGrid>
        <IonRow className="ion-align-items-center">
          <IonCol>
            <IonTextarea
              id="calculator-screen"
              disabled
              value={screenValue}
            ></IonTextarea>
          </IonCol>
        </IonRow>

        <IonRow className="ion-align-items-center ion-text-center">
          <IonCol size="9">
            <IonButton
              expand="full"
              size="small"
              color="dark"
              onClick={() => onClickBtnAction('AC')}
            >
              AC
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton
              expand="full"
              size="small"
              color="dark"
              onClick={() => onClickBtnAction('+')}
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
                onClick={() => onClickBtnAction(text)}
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
                onClick={() => onClickBtnAction(text)}
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
                onClick={() => onClickBtnAction(text)}
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
              onClick={() => onClickBtnAction('0')}
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
                onClick={() => onClickBtnAction(text)}
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
