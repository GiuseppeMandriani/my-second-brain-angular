import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Meteo } from './model/weather.model';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  http = inject(HttpClient);
  city = input.required<string>({ alias: 'location'});
  label = computed(() => this.city().toUpperCase())
  meteo = signal<Meteo | null>(null)
  temperature = computed(() => this.meteo()?.main.temp)

  constructor() {
    effect(() => {
      if (!this.city()) return;
      // this.http.get<Meteo>(`https://api.openweathermap.org/data/2.5/weather?q=${this.city()}&units=metric&APPID=`)
      //   .subscribe(res => {
      //     this.meteo.set(res)
      //   })
    });
  }

}
