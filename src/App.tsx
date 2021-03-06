import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  swapVerticalOutline,
  triangle,
  calculatorOutline,
  albumsOutline
} from 'ionicons/icons';

// Components
import Home from './pages/Home';
import { CounterTab } from './pages/CounterTab/CounterTab';
import { CalculatorTab } from './pages/CalculatorTab/CalculatorTab';
import { SlidesTab } from './pages/SlidesTab/SlidesTab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme */
import './theme/base.css';
import './theme/variables.css';

/**
 * Contenedor principal de la aplicacion, este se encarga del manejo de las
 * rutas de la aplicacion mediante el componente de IonTabs
 * Ionic React Router como libreria de ruteo
 * mas info sobre Ionic React Router: https://ionicframework.com/docs/react/navigation
 * mas info sobre IonTabs: https://ionicframework.com/docs/api/tabs
 */
const App: FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home-tab">
            <Home />
          </Route>
          <Route exact path="/counter-tab">
            <CounterTab />
          </Route>
          <Route exact path="/calculator-tab">
            <CalculatorTab />
          </Route>
          <Route exact path="/slides-tab">
            <SlidesTab />
          </Route>
          <Route exact path="/">
            <Redirect to="/home-tab" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home-tab" href="/home-tab">
            <IonIcon icon={triangle} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="counter-tab" href="/counter-tab">
            <IonIcon icon={swapVerticalOutline} />
            <IonLabel>Counter</IonLabel>
          </IonTabButton>
          <IonTabButton tab="calculator-tab" href="/calculator-tab">
            <IonIcon icon={calculatorOutline} />
            <IonLabel>Calculator</IonLabel>
          </IonTabButton>
          <IonTabButton tab="slides-tab" href="/slides-tab">
            <IonIcon icon={albumsOutline} />
            <IonLabel>Slides</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
