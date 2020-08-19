import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'; 

// Ionic
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonItem, IonThumbnail, IonImg, IonLabel, IonCardHeader, IonCardTitle, IonButton, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';

// Context
import UserContext from '../../data/user-context';

// Custom Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Module styles
import classes from './Kart.module.css';
import DepartmentsContext from '../../data/DepartmentsContextProvider';

const Kart: React.FC = () => {
    
    /* Grab kart from context*/
    const userCtxt = useContext( UserContext );
    const kart = userCtxt.kartRows;

    /* Grab context */
    //const departmentsCtxt = useContext( DepartmentsContext )

    // Get history
    const history = useHistory();

    let subTotal = 0;
    let totalProducts = 0;

    kart.forEach(row =>{
        subTotal += ( Number(row.quantity) * Number(row.product.price) );
        totalProducts += Number(row.quantity);
    })

    const checkout = () => {
        alert( 'Thanks for your payment!' );
        userCtxt.clearKart();

        // Go to departments
        history.replace( "/departments/" );
    }



    return(

        <IonPage>

            <IonContent fullscreen={true}>
                
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonText color="dark">Subtotal ({totalProducts} products): US$ { subTotal } </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" onClick={ checkout }>
                                Proceed to CheckOut
                            </IonButton>
                        </IonCol>
                    </IonRow>

                    { kart.map( kartRow =>(
                     
                    <IonRow key={kartRow.id} className={classes.RowSeparator}>
                        <IonCol>
                            <IonItem lines="none">
                                <img src={kartRow.product.imageUrl} alt="Product"/>
                            </IonItem>
                            
                        </IonCol>

                        <IonCol>
                            
                            <IonItem lines="none">
                                <h4>{kartRow.product.title}</h4>
                            </IonItem>
                            <IonItem lines="none">
                                <h4>US $ {kartRow.product.price}</h4>
                            </IonItem>
                            <IonItem lines="none">
                                <IonText color="danger">Quantity: { kartRow.quantity } </IonText>
                            </IonItem>
                            
                        </IonCol> 

                    </IonRow>

                    
                    ))               
                    }

                    <IonRow>
                        <IonCol>
                            <IonButton routerLink={"/departments"}  expand="block" routerDirection="none">
                                Continue Shopping
                            </IonButton>
                        </IonCol>
                    </IonRow>

                </IonGrid>            
                
            </IonContent>
         
        </IonPage>
        
    );
}

export default Kart;