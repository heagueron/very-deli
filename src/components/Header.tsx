import React from 'react';
import { IonHeader, IonTitle, IonToolbar, 
    IonButton, IonMenuButton, IonButtons, IonBackButton } from '@ionic/react';


const Header: React.FC = () => {
  return (

    <IonHeader>
      <IonToolbar>

        <IonTitle className="ion-text-center">Very Deli</IonTitle>

      </IonToolbar>
    </IonHeader>

  );
};

export default Header;