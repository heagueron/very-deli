import React, {useState} from 'react';

// Custom Components
import { IonPage, IonContent, IonInput, IonButton, IonGrid, IonRow, IonCol, IonItem, IonLabel } from '@ionic/react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { presentToast } from '../../toats';
import { registerUser } from '../../firebaseConfig';




const Register: React.FC = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  
  async function register() {
    // console.log(username, password, confirmPassword);

    // Validation
    if( password !== confirmPassword ){
      return presentToast("Password and Confirm Password fiedls must match", 3000);
    }
    if(username.trim() === '' || password.trim() === ''){
      return presentToast("Username and Password are required", 3000);
    }

    const res = await registerUser( username, password );
    if(res){
      presentToast("User registration succesful", 3000)
    } else {
      presentToast("User registration failed", 3000)
    }
    // After Registration in:
    setUsername('');
    setPassword('');
    setConfirmPassword('');
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
            <IonCol>
              <IonItem>
                <IonLabel position="floating">confirm password</IonLabel>
                <IonInput type="password"
                  value={confirmPassword}
                  onIonChange={ (e:any) => setConfirmPassword(e.target.value)} ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-center ion-margin-top">
              <IonButton expand="block" onClick={register}>
                Register
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-center">
              <p>Already have an account?
                <Link to="/login" className="ion-margin">Login</Link>
              </p>
            </IonCol>
          </IonRow>

        </IonGrid>
          
      </IonContent>

    </IonPage>
    
  );
};


export default Register;