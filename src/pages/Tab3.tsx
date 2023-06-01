import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kalkulator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Kalkulator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonInput label="MB" type="number" placeholder="000"></IonInput>
        </IonItem>
        <IonItem>
          <IonText className='result'></IonText>
        </IonItem>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
