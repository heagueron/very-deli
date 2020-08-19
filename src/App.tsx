import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenuToggle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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

/* Theme variables */
import './theme/variables.css';

/* Icons */
import { 
  albumsOutline, 
  addOutline, 
  gridOutline, //all deps
  personAddOutline, // register
  chatbubbleOutline, //supporrt
  logInOutline,
  logOutOutline,
  peopleOutline, // about us
  readerOutline, // privacy policy
  layersOutline, //blog
  homeOutline // home
 } from 'ionicons/icons';

/* Custom Components, Pages */
import Landing from './pages/Landing/Landing';
import AllDepartments from './pages/AllDepartments/AllDepartments';
import DepartmentDetail from './pages/DepartmentDetail/DepartmentDetail';
import Product from './pages/Product/Product';
import Kart from './pages/Kart/Kart';

/* CONTEXT */
import DepartmentsContextProvider from './data/DepartmentsContextProvider';
import UserContextProvider from './data/UserContextProvider';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

    <IonMenu side="start" contentId="menu1">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Your Very Deli Options </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>

          <IonMenuToggle>
            <IonItem routerLink="/" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={ homeOutline }>
              </IonIcon>
              <IonLabel>Very Deli</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle>
            <IonItem routerLink="/departments" routerDirection="none" lines="none">
              <IonIcon color="medium" slot="start" icon={ gridOutline }>        
              </IonIcon>
              <IonLabel>Departments</IonLabel>
            </IonItem>
          </IonMenuToggle>
        
          <IonMenuToggle>
            <IonItem>
              <IonIcon color="medium" slot="start" icon={ personAddOutline }>
              </IonIcon>
              <IonLabel>Register</IonLabel>
            </IonItem> 
          </IonMenuToggle>
          
          
          
        </IonList>
      </IonContent>
    </IonMenu>

    {/* Wrap the app's components that need our context providers */}
    <DepartmentsContextProvider>
      <UserContextProvider>

        <IonRouterOutlet id="menu1">         
          <Route path="/" component={ Landing } exact></Route>
          <Route path="/departments" component={AllDepartments} exact></Route>
          <Route path="/departments/:id" component={ DepartmentDetail } exact></Route>
          <Route path="/products/:id" component={ Product } exact></Route>
          <Route path="/kart" component={ Kart } exact></Route>
          <Redirect to="/" />
        </IonRouterOutlet>

      </UserContextProvider>
    </DepartmentsContextProvider>
    
    </IonReactRouter>
  </IonApp>
);

export default App;
