import React from 'react';
import { IonTitle, IonToolbar, 
    IonFooter, 
    IonGrid,
    IonRow,
    IonCol} from '@ionic/react';

// Module styles
import classes from './components.module.css';

const Footer: React.FC = () => {

    const year = new Date().getFullYear();

  return (

    <IonFooter className={classes.VdFooter}>
      <IonGrid>

          <IonRow className="ion-text-center">
            <IonCol size="12">
                <h6>{year} Very Deli. Todos los derechos reservados. </h6>
            </IonCol>
          </IonRow>

          <IonRow className="ion-text-center">
            <IonCol size="4"><small>Privacidad</small></IonCol>
            <IonCol size="4"><small>Cookies</small></IonCol>
            <IonCol size="4"><small>Terminos</small></IonCol>
          </IonRow>

      </IonGrid>
    </IonFooter>

  );
};

export default Footer;
