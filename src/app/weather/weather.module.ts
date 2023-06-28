import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';



@NgModule({
  declarations: [
    SearchBoxComponent,
    HomeComponent,
    InfoBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    InfoBoxComponent
  ]
})
export class WeatherModule { }
