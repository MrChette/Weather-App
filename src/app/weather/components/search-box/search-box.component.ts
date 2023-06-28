import { Component, ElementRef, ViewChild } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'weather-search-box',
  template:`
    <h5>Buscar</h5>
    <input type="text"
      class="form-control"
      placeholder="Search City..."
      (keyup.enter)="searchCity()"
      #txtTagInput
      >
    `
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public cityInput!:ElementRef<HTMLInputElement>;

  constructor( private weatherService: WeatherService) { }

  searchCity(){
    const newTag = this.cityInput.nativeElement.value;

    this.weatherService.searchCity(newTag);

    this.cityInput.nativeElement.value = '';
  }

}
