import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type Alert = {
  msg: string;
  type: 'primary' | 'danger' | 'success'
}

type MenuItem = {
  section: Section;
  label: string;
}

type Section = 'home' | 'step1' | 'step2' | 'final' | null;

export type Coords = {
  x: number;
  y: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
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

  alert: Alert = {
    msg: 'hello',
    type: 'primary'
  }


  section: Section = null;
  position: Coords | null = null;

  menuItems: MenuItem[] = [
    { section: 'home', label: 'Home'},
    { section: 'step1', label: 'Step 1'},
    { section: 'step2', label: 'Step 2'},
    { section: 'final', label: 'Final'},
  ]



  show(event: MouseEvent) {
    this.position = {
      x: event.clientX + 10,
      y: event.clientY + 10
    }
  }

  hide() {
    this.position = null;
  }
}
