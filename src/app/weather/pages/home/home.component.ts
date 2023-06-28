import { CurrentCity } from '../../interface/weather.interfaces';
import { WeatherService } from './../../services/weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'weather-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private weatherService:WeatherService) {}

  get currentCity(): CurrentCity {
    if (this.weatherService.dataCity === undefined) {
      throw new Error("El valor de dataCity es undefined.");
    }
    return this.weatherService.dataCity;
  }

}
