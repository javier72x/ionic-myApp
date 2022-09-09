import React from 'react';
import 
{ IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import CardAsistencia from '../../components/CardAsistencia';

import './Asistencia.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='titulo'>Sistema de Control</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      
      <CardAsistencia />
      
       
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
