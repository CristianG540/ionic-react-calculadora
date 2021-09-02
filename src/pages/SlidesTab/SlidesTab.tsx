import { FC } from 'react';
import { IonSlides, IonSlide, IonContent, IonPage } from '@ionic/react';

import './SlidesTab.css';

// Optional parameters to pass to the swiper instance.
// Parametros opcionales que se le pasan a la instancia del swiper
// Mas info sobre opciones validas: http://idangero.us/swiper/api/
const slideOpts = {
  initialSlide: 0,
  speed: 400
};

export const SlidesTab: FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <img src="https://i.imgur.com/aVg5G3J.jpeg" />
            <h2>Spider-Man (2002)</h2>
            <p>
              Debido a la gran cantidad de seguidores del Hombre Araña, la
              primera película de la saga estrenada en 2002, era esperada con
              impaciencia por los mismos y tuvo una gran acogida por el público.
              Para muchos de sus aficionados, esta es la única película digna en
              la que se ha adaptado el personaje, &quot;la película de
              Spider-Man&quot; tal cual, y siempre se quedó así, uno de los
              puntos más polémicos de la película fue la elección del actor que
              le daría vida al héroe del cómic. Los principales candidatos eran
              Freddie Prinze Jr. (Sé lo que hicisteis el último verano, 1997),
              Leonardo DiCaprio (Titanic, 1997) y Heath Ledger (El patriota,
              2000).
            </p>
          </IonSlide>
          <IonSlide>
            <img src="https://i.imgur.com/x7aVf9J.jpeg" />
            <h2>Spider-Man 2 (2004)</h2>
            <p>
              Tras el éxito de la película Spider-Man (2002) se estrenó en junio
              de 2004 su secuela, Spider-Man 2, también dirigida por Sam Raimi y
              protagonizada por Tobey Maguire. En este caso, el villano fue el
              Doctor Octopus , interpretado por Alfred Molina.​ Fue un éxito
              total ya que, tras recuperar inversiones, la película ganó un
              premio Oscar por mejores efectos visuales y estuvo nominada para
              mejor sonido y edición de sonido. Esta película logró tener
              críticas algo mejores que la primera debido a que la calidad fue
              mejorada.
            </p>
          </IonSlide>
          <IonSlide>
            <img src="https://i.imgur.com/8C2rkTW.jpeg" />
            <h2>Spider-Man 3 (2007)</h2>
            <p>
              Tres años después de Spider-Man 2 (2004), se estrena Spider-Man 3
              (2007). Además de los ya habituales Tobey Maguire, Kirsten Dunst,
              Rosemary Harris y J. K. Simmons, Raimi se trajo a Topher Grace
              como Eddie Brock/Venom, Bryce Dallas Howard como Gwen Stacy,
              Thomas Haden Church como Flint Marko/El Hombre de Arena y James
              Franco , quien había aparecido como Harry Osborn y pudo actuar
              como el Nuevo Duende.
            </p>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
