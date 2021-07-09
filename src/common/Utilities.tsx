import { Storage } from '@capacitor/storage';
import * as ServerAPI from '../common/ServerAPI';

export const persistWeatherData = async (weatherData:ServerAPI.WeatherRes) => {
    await Storage.set({
        key: 'weatherData',
        value: JSON.stringify({
            weatherData: weatherData
        })
    });
}

export const getPersistWeatherData = async () => {
    const weatherData = await Storage.get({ key: 'weatherData' });
    const weatherDataRes = weatherData.value ? JSON.parse(weatherData.value) : {};
    return weatherDataRes;
}
