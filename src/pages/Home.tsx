import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { useEffect, useState } from 'react';
import * as ServerAPI from '../common/ServerAPI';
import Preloader from '../components/Preloader';
import {Network} from '@capacitor/network';
import * as Constants from '../common/Constants';
import * as Utilities from '../common/Utilities';
import { Geolocation } from '@capacitor/geolocation';
import AppToast from '../components/AppToast';
const Home: React.FC = () => {
  
  const [showLoading, setShowLoading] = useState(false);
  const [locationName,setLocationName] = useState("");
  const [currentDate,setCurrentDate] = useState("");
  const [currentTemp,setCurrentTemp] = useState(0);
  const [weather,setWeather] = useState("");
  const [realTemp,setRealTemp] = useState(0);
  const [weatherIcon,setWeatherIcon] = useState("");
  const [weatherRes,setWeatherRes] = useState<ServerAPI.WeatherRes>();
  const [speed,setSpeed] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  useIonViewDidEnter(()=>{
    const coordinates = Geolocation.getCurrentPosition();
    coordinates.then(data=>{
      setLatitude(data.coords.latitude);
      setLongitude(data.coords.longitude);
    });
  });
  useEffect(()=>{
    setShowLoading(true);
    getWeatherData();
  },[longitude]);
  
  async function getWeatherData() {
    setShowLoading(true);
    const status = await Network.getStatus();
    if(status.connected && status.connectionType==="wifi"){
      let api_id = Constants.Configs.api_id;
      const result = await fetch(Constants.Configs.BASE_URL+'weather?lat='+latitude+'&lon='+longitude+'&appid='+api_id);
      const data = await result.json();
      //Utilities.persistWeatherData(data);
      setWeatherRes(data);
    } else if(status.connectionType!="wifi"){
      setToastMessage("Please Connect With Wifi to get weather data..")
      setShowToast(true);
    }
    setShowLoading(false);
  }
  useEffect(()=>{
    if(weatherRes?.name!=undefined)
      setLocationName(weatherRes.name);
    if(weatherRes?.dt!=undefined){
      var date = new Date(weatherRes.dt*1000);
      setCurrentDate(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
    }
    if(weatherRes?.main.temp!=undefined){
      setCurrentTemp((weatherRes.main.temp - 273.15) *9/5 + 32);
    }

    if(weatherRes?.main.feels_like!=undefined){
      setRealTemp((weatherRes.main.feels_like - 273.15) *9/5 + 32);
    }
    if(weatherRes?.weather[0].main!=undefined){
      setWeather(weatherRes?.weather[0].main);
    }

    if(weatherRes?.wind.speed!=undefined){
      setSpeed(weatherRes?.wind.speed);
    }

    if(weatherRes?.weather[0].icon!=undefined){
      var iconUrl = "https://openweathermap.org/img/w/" + weatherRes?.weather[0].icon + ".png";
      setWeatherIcon(iconUrl);
    }

  },[weatherRes]);
  
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <AppToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={toastMessage}  />
        <Preloader isOpen={showLoading} onDidDismiss={() => setShowLoading(false)} />
        <div className="osahan-success vh-100 bg-weather">
          <div className="p-5 text-center">
              <i className="icofont-check-circled display-1 text-warning"></i>
              <h1 className="text-white font-weight-bold">{locationName}</h1>
              <p className="text-white font-weight-light">Today's Weather</p>
              <p className="text-white font-weight-light">{currentDate}</p>
              
          </div>
          <div className="text-center">
            <p className="text-white weather-text">{currentTemp.toFixed(2)}<sup>&deg; F</sup></p>
            <p className="text-white font-weight-light">{weather}</p>
            <img className="img-fluid" src={weatherIcon}/>

            
          </div>
          <div className="col-12 row mt-5">
            <div className="text-white font-weight-light col-6 text-center">
              <p>Wind</p>
              {speed} m/sec
            </div>
            <div className="text-white font-weight-light col-6 text-center">
              <p>Real Feel</p>
              {realTemp.toFixed(2)}<sup>&deg; F</sup>
            </div>
            
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
