import React, { useContext } from 'react';

// Ionic
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonItem, IonThumbnail, IonImg, IonLabel, IonCardHeader, IonCardTitle, IonButton, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';

// Context
import DepartmentsContext, { Department } from '../../data/departments-context';

// Custom Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';


interface DepartmentDetailProps extends RouteComponentProps<{
    id: string;
  }> {}

const DepartmentDetail: React.FC<DepartmentDetailProps> = ({match}) => {
    
   /* Grab context */
    const departmentsCtxt = useContext( DepartmentsContext )
    const department = departmentsCtxt.departments.filter( dep => 
        dep.id == match.params.id)[0];

    const departmentProducts = departmentsCtxt.products.filter( product => Number(product.departmentId) == Number(department.id) );

    return(

        <IonPage>

            <Header/>

            <IonContent fullscreen={true}>
                
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonImg src={department.imageUrl} />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonText color="dark">{ department.title }</IonText>
                            <p>{ department.description }</p>
                        </IonCol>
                    </IonRow>
                </IonGrid>            

                <IonGrid>
                    { departmentProducts.map( product =>(
                    <IonRow key={product.id} >

                        <IonCol>
                            <IonItem routerLink={"/products/" + product.id } routerDirection="none" lines="none">
                                <img src={product.imageUrl} alt="Product"/>
                            </IonItem>
                            
                        </IonCol>

                        <IonCol>
                            <IonItem routerLink={"/products/" + product.id } routerDirection="none" lines="none">
                                <h4>{product.title}</h4>
                                </IonItem>
                        </IonCol> 


                    </IonRow>
                    ))               
                    }
                </IonGrid>
                
                <Footer />
                
            </IonContent>
         
        </IonPage>
        
    );
}

export default DepartmentDetail;