import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  apiUrl: any = 'https://cloud-api.up.railway.app/';
  weatherData: any;

  constructor(private http: HttpClient) {
    this.getWeather();
  }

  getWeather() {
    this.http.get(`${this.apiUrl}weather`).subscribe(res => {
      if (res)
        this.weatherData = res;
    });
  }
}
