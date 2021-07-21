import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
//import { Pl } from '@capacitor/core';


const App: React.FC = () => {
  //  const { backgroundTask } = BackgroundMode;

  // let taskId = BackgroundTask.beforeExit(async () => {
  //   let start = new Date().getTime();
  //   for (var i = 0; i < 1e18; i++) {
  //     if (this.id > 10) { 
  //       break;
  //     }
  //     if ((new Date().getTime() - start) % 2000 === 0) {
  //       let location = await this.getCurrentPosition();
  //       LocalNotifications.schedule({
  //         notifications: [{
  //           title: "Last Known Location",
  //           body: this.id + " Latitude: " + location.coords.latitude + "Longitude: " + location.coords.longitude,
  //           id: this.id++,
  //           schedule: {
  //             at: new Date(Date.now() + 1000 * 10)
  //           },
  //           sound: null,
  //           attachments: null,
  //           actionTypeId: "",
  //           extra: null
  //         }]
  //       });
  //     }
  //   }
  //   BackgroundTask.finish({
  //     taskId
  //   });
  //});     
  return(
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
export default App;
