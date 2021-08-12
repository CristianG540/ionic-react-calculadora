import { FC } from 'react';
import './ExploreContainer.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContainerProps {}

const ExploreContainer: FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;

console.log('🚀 ~ file: ExploreContainer.tsx ~ line 16 ~ ExploreContainer');
