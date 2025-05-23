import { Component, signal } from '@angular/core';
import { WeatherComponent } from "../../../../shared/components/weather/weather.component";

@Component({
  selector: 'app-weather-demo',
  imports: [WeatherComponent],
  templateUrl: './weather-demo.component.html',
  styleUrl: './weather-demo.component.css'
})
export default class WeatherDemoComponent {
  city = signal<string>('')

}
