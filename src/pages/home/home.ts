import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { WeatherService } from '../../app/shared/services/weather.service';
import { CurrentWeather } from '../../app/shared/interfaces';
import { WeatherIconService } from '../../app/shared/services/weather-icon.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public currentWeather: CurrentWeather;

  public get weatherIconClass(): string[] {
    let cssClass = this.weatherIconService.getWeatherIconClass(this.currentWeather.weather[0].id);
    console.log(cssClass);
    return cssClass;
  }
  
  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private weatherService: WeatherService, 
    private weatherIconService: WeatherIconService) {

  }

  ngOnInit() {
    const loader = this.loadingController.create({content: 'Please wait...'});
    loader.present();
    this.weatherService.getCurrentWeatherByCity("Chicago").subscribe(x =>  {
      this.currentWeather = x
      loader.dismiss();
    });
  }

}
