import React, { useContext } from 'react';
import { IonContent, IonPage,
    IonGrid, IonRow, IonCol, IonButton, IonCard,  IonCardContent, IonItem } from '@ionic/react';

// Context
import DepartmentsContext, { Department } from '../../data/departments-context';

// Custom Components
import Footer from '../../components/Footer';

// Module styles
import classes from './Landing.module.css';


const Landing: React.FC = () => {

  /* Grab context */
  const departmentsCtxt = useContext( DepartmentsContext )
  
  return (

      <IonPage>

            <IonContent>

              <div className={classes.HeroImage}>
                <div className={classes.HeroText1}>
                  <h1>Very Deli</h1>
                </div>
                <div className={classes.HeroText2}>
                  <h3>We delivery Very Deli products</h3>
                </div>
              </div>

              <IonGrid>

                <IonRow>
                  <IonCol className="ion-text-center ion-margin-bottom">
                    <h2>Departments</h2>
                  </IonCol>
                </IonRow>

                <IonRow>
                  { departmentsCtxt.departments.map( department =>(
                    <IonCol key={department.id} size="6" size-lg="3" size-md="4" size-sm="6" size-xs="6">
                      <IonCard>
                        <img src={department.imageUrl} alt="Department"/>

                        <IonCardContent>
                          
                          <IonItem lines="none">
                            <IonButton routerLink={"/departments/" + department.id } routerDirection="none" 
                              className={ classes.CenterElement } fill="clear" >
                              {department.title}
                            </IonButton>
                          </IonItem>
                        </IonCardContent>
                      </IonCard>
                    </IonCol>
                  ))}
                </IonRow>

              </IonGrid>

              <Footer />
              
            </IonContent>

          </IonPage>
    
  );
};


export default Landing;