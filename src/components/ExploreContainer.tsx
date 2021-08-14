import { FC } from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  counterValue: number;
  calculatorResult: number;
}

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
