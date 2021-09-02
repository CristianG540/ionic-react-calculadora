import { FC } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  counterValue: number;
  calculatorResult: number;
}

/**
 * Este simple componente solo se encarfa de mostrar en pantalla los dos valores
 * que se le envian en las propiedades, en este caso muestra en pantalla el
 * valor de 'calculatorResult' y 'counterValue'
 *
 * @param {*} {calculatorResult, counterValue
 * }
 * @return {*}
 */
const ExploreContainer: FC<ContainerProps> = ({
  calculatorResult,
  counterValue
}) => {
  return (
    <div className="container">
      <strong>The app is ready</strong>

      <ul>
        <li>
          <strong>Counter value: </strong> {counterValue}
        </li>
        <li>
          <strong>Calculator result:</strong> {calculatorResult}
        </li>
      </ul>
    </div>
  );
};

export default ExploreContainer;
