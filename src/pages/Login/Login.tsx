import React, {useState} from 'react';

// Custom Components
import { IonPage, IonContent, IonInput, IonButton, IonGrid, IonRow, IonCol, IonItem, IonLabel } from '@ionic/react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

import { loginUser } from '../../firebaseConfig';
import { presentToast } from '../../toats';

const Login: React.FC = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  async function login(){
    //console.log(username, password);

    const res = await loginUser(username,password);
    //console.log(`${res ? 'Login Ok' : 'Login Failed'}`);

    if(res){
      presentToast("Login succesful", 3000)
    } else {
      presentToast("Login failed", 3000)
    }
    // After Logged in:
    setUsername('');
    setPassword('');
  }

  return (

    <IonPage>
      <Header />

      <IonContent>
        
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">username</IonLabel>
                <IonInput type="text"
                  value={username}
                  onIonChange={ (e:any) => setUsername(e.target.value)} ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">password</IonLabel>
                <IonInput type="password"
                  value={password}
                  onIonChange={ (e:any) => setPassword(e.target.value)} ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-center ion-margin-top">
              <IonButton expand="block" onClick={login}>
                Login
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-center">
              <p>Don't have an account?
                <Link to="/register" className="ion-margin">Register</Link>
              </p>
            </IonCol>
          </IonRow>

        </IonGrid>
          
      </IonContent>

    </IonPage>
    
  );
};


export default Login;