import React from 'react';
import { IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent} from '@ionic/react';

import './CardAsistencia.css';

const CardAsistencia: React.FC = () => {
    
    return(
        
    <IonCard>
       <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7331.968255812519!2d-106.43507110445886!3d23.243664639068346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f535dba043ca1%3A0x2a30ea8bfb927ff7!2sSanchez%20Celis%2C%2082120%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1ses-419!2smx!4v1662700022045!5m2!1ses-419!2smx" width="250" height="250" ></iframe>
    <IonCardHeader>
      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      <IonCardTitle>Card Title</IonCardTitle>
    </IonCardHeader>
    <IonCardContent className='caja'>
      Keep close to Nature's heart... and break clear away, once in awhile,
      and climb a mountain or spend a week in the woods. Wash your spirit clean.
</IonCardContent>

     
  </IonCard>
 
  );
};

export default CardAsistencia;