import { Component, Input } from '@angular/core';
import { Weather, CurrentCity } from '../../interface/weather.interfaces';

@Component({
  selector: 'weather-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent {
  ngOnInit() {
    console.log(this.currentCity); // Verificar los datos en la consola
  }

  @Input()
  public currentCity: CurrentCity = {} as CurrentCity;

}
