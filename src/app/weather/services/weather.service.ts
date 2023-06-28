import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentCity, Weather } from '../interface/weather.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public dataCity: CurrentCity = {} as CurrentCity;
  private apiKey:string = 'bb239e88c90b4269a1c160313232806';
  private serviceUrl:string = 'http://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) { }


  public searchCity(city : string) : void {
    if(city.length === 0 ) return;

    const params = new HttpParams()
      .set('key',this.apiKey)
      .set('q',city)
    console.log(params);

    this.http.get<Weather>(`${this.serviceUrl}`, {params})
      .subscribe(resp=> {
         this.dataCity = resp.current;
         console.log(resp)
         console.log({city : this.dataCity});
      })
  }
}
