import React, { useContext } from 'react';

// Ionic
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonText, IonImg, IonButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom'; 

// Context
import DepartmentsContext, { Department } from '../../data/departments-context';
import UserContext from '../../data/user-context';

import Header from '../../components/Header';

// Module styles
import classes from './Product.module.css';
import Footer from '../../components/Footer';

interface DepartmentDetailProps extends RouteComponentProps<{
  id: string;
}> {}
    
const Product: React.FC<DepartmentDetailProps> = ({match}) => {

  /* Grab product from context*/
  const departmentsCtxt = useContext( DepartmentsContext );
  const product = departmentsCtxt.products.filter( product => 
    product.id == match.params.id)[0];

  /* Grab kart */
  const userCtxt = useContext( UserContext );
  const kart = userCtxt.kartRows;

  // Get history
  const history = useHistory();

  // Add Product to Kart
  const addToCart = () => {

    let productInKart = false;

    kart.forEach( row => {
      //console.log(`row.product.id: ${row.product.id} while product.id: ${product.id}`)
      if( row.product.id === product.id ) {
        productInKart = true;
      }
    });

    if(!productInKart){
      //console.log(`Add NEW to cart: ${product.title}`);
      userCtxt.addNewProductToKart( product );
    } else {
      //console.log(`Increment in: ${product.title}`);
      userCtxt.incrementInKart( product.id );
    }

    // Go to Kart
    history.replace('/kart');

  }

  return (
    <IonPage>

      <Header/>

      <IonContent>
          <IonGrid>

              <IonRow>
                <IonCol> 
                  <IonText color="primary">{ product.brand }</IonText>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol> 
                  <IonText>{ product.title }</IonText>
                </IonCol>
              </IonRow>
               
              <IonRow>
                <IonCol>
                    <IonImg src={ product.imageUrl } />
                </IonCol>
              </IonRow>

              { Number(product.stock) < 6  && 
              <IonRow>
                <IonCol>
                  <IonText color="danger">There are(is) just { product.stock } in stock. More on their way.</IonText>
                </IonCol>
              </IonRow> }

              <IonRow>
                <IonCol>
                  <h3>US$ {product.price}</h3>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonButton expand="block" onClick={ addToCart }>
                    Add to cart
                  </IonButton>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol> 
                  <IonText className={ classes.BoldTitle }>Description</IonText>
                  <p>{ product.description }</p>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol> 
                  
                </IonCol>
              </IonRow>

          </IonGrid>

          <Footer />

      </IonContent>

    </IonPage>
  );
};

export default Product;