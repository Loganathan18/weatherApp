const APIMethods = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
}

export const APIResult = {
    SUCCESS: "true",
    FAILURE: "false"
}

export interface Weather{
    id:string;
    main:string;
    description:string;
    icon:string;
}

export interface Main{
    temp: number;
    feels_like: number;
    temp_min: string;
    temp_max: string;
    pressure: string;
    humidity: string;
    sea_level: string;
    grnd_level: string;
}

export interface Wind{
    speed:string;
    deg:string;
    gust:string;
}

export interface Sys{
    "type": number;
    "id": number;
    "country": string;
    "sunrise": string;
    "sunset": number;
}

export interface WeatherRes{
    "dt": number;
    "timezone": number;
    "id": number;
    "name": string;
    "sys": Sys;
    "wind": Wind;
    "main": Main;
    "weather": Weather[];
}