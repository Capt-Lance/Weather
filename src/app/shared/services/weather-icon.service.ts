import { Injectable } from '@angular/core';

import { WeatherIconEnum } from '../enum';

@Injectable()
export class WeatherIconService {
    private _preClass = 'wi'
    public getWeatherIconClass(weatherId: number): string[]{
        let cssClass;
        switch (weatherId){
            // Rain
            case WeatherIconEnum.LightRain: {
                cssClass = 'wi-night-alt-rain';
                break;
            }
            case WeatherIconEnum.ModerateRain: {
                cssClass = 'wi-day-rain';
                break;
            }
            // Snow
            // Atmoshpere
            // Clear
            // Clouds
            case WeatherIconEnum.OvercastClouds: {
                cssClass = 'wi-night-cloudy';
                break;
            }

            default: {
                console.error(`WeatherId ${weatherId} not implemented.Using default`);
                cssClass = 'wi-na';
            }
        }
        return [this._preClass, cssClass];
    }
}