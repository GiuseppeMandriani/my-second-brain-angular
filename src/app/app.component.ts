import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'angular-course';
  public dynamicValue: number = 0;
  public imgLogoConfig = {
    src: "https://miro.medium.com/v2/resize:fit:1400/1*WWRm1tIQ5MinLE0rUTo62w.png",
    alt: "Logo Angular",
    width: 200,
  }
}
