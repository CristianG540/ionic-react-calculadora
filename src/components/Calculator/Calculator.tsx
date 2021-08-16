import { FC, useState } from 'react';
import { IonButton, IonCol, IonGrid, IonRow, IonTextarea } from '@ionic/react';
import { evaluate } from 'mathjs';
import './Calculator.css';

export interface CalculatorProps {
  onEvaluateValidResult: (screenValue: number) => void;
}

/**
 * Este componente contiene la logica y el diseño de una calculadora sencilla,
 * se usa la funcion 'evaluate' de la libreria mathjs para resolver las
 * operaciones ingesadas por el usuario.
 *
 * @param {*} { onEvaluateValidResult } como parametro se recibe una funcion que
 * se lanza cada vez que se evalua un resultado valido, esta funcion recibe como
 * parametro el nuevo resultado valido
 */
const Calculator: FC<CalculatorProps> = ({ onEvaluateValidResult }) => {
  // En las siguientes 3 sentencias se usa el hook 'useState' para declarar el
  // estado interno del componente el hook useState devuelve un array con dos
  // valores, el primero es el valor del estado y el segundo es una funcion que
  // permite cambiar dicho estado

  // screenValue se encarga de almacenar el valor actual de lo que se muestra en
  // la 'pantalla' de la calculadora
  const [screenValue, setScreenValue] = useState('0');
  // isChanged es una bandera que indica si los siguientes valores que se
  // agregan a la pantalla se van a concatenar al valor actual o si el nuevo
  // valor ingresado sera el nuevo valor a mostrar en pantalla por ejemplo: si
  // ingreso '1+1' y presiono el boton 'AC' el valor en pantalla cambia a '0' y
  // isChanged cambia a 'false', por lo que si preciono por ejemplo el boton '1'
  // el nuevo valor en pantalla va a ser '1' y no '01'
  const [isChanged, setIsChanged] = useState(false);
  // wasEvaluated es una bandera que indica si el resultado fue evaluado sin errores
  const [wasEvaluated, setWasEvaluated] = useState(false);

  const onClickBtnAction = (buttonValue: string) => {
    if (buttonValue === 'AC') {
      setScreenValue('0');
      // isChanged se setea a false por lo que ahora si se preciona un numero en
      // la calculadora el valor en pantalla no se concatena, se remplaza
      setIsChanged(false);
    } else if (buttonValue === '=') {
      // cuando se preciona el boton '=' se ejecuta la funcion evaluate de la
      // libreria mathjs dentro de un bloque try catch de esa forma si el
      // usuario ingresa una formula incorrecta en la calculadora puedo atrapar
      // el error y darle un manejo adecuado sin que la aplicacion sufra un
      // fallo critico
      try {
        const newScreenValue: string = evaluate(screenValue).toString();

        if (newScreenValue === 'Infinity') {
          setIsChanged(false);
        } else {
          setIsChanged(true);
          setWasEvaluated(true);
          onEvaluateValidResult(parseFloat(newScreenValue));
        }

        setScreenValue(newScreenValue);
      } catch (_) {
        // si llegara a fallar algo al momento de evaluar la formula ingresada
        // por el usuario, seteo un mensaje informativo en pantalla informando
        // que la formula esta mal escrita y seteo la bandera isChanged a false,
        // de esa manera el usuario podra continuar usando la app sin problemas
        setScreenValue('Malformed expression');
        setIsChanged(false);
      }
    } else if (wasEvaluated) {
      // si despues de presionar el boton '=' el usuario presiona un boton que
      // no sea un signo de operacion la calculadora setea el nuevo valor en
      // pantalla y no lo concatena. por ejemplo: si el usuario ingresa '1+1' y
      // presiona '=' el nuevo valor en pantalla sera '2' si por ejemplo el
      // usuario presiona un nuevo numero, supongamos que '3' el nuevo valor en
      // pantalla sera '3', pero si preciona un signo de operacion por ejemplo
      // '+' el nuevo valor en pantalla sera '2+' y podra seguir creando la
      // nueva formula sin problema
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
      // esta condicion se encarga de usar la bandera isChanged para saber si el
      // nuevo valor en pantalla se va a concatenar al valor anterior o si se va
      // a remplazar por el nuevo
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

export { Calculator };
