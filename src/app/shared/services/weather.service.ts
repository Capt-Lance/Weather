import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable } from 'rxjs';

import {CurrentWeather } from '../interfaces';

@Injectable()
export class WeatherService{
    private _apiKey = 'a70f96f9ff020e160975ae9c1b2624ed';
    private _baseUrl = 'http://api.openweathermap.org/data/2.5'
    constructor(private http: HttpClient){}

    public getCurrentWeatherByCity(city: string): Observable<CurrentWeather>{
        return this.http.get<CurrentWeather>(`${this._baseUrl}/weather?q=${city}&appId=${this._apiKey}&units=imperial`);
    }

    public getWeather(date) {

    }
}