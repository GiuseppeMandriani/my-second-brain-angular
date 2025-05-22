import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { Navbar2Component } from "./core/components/navbar-2/navbar-2.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, NavbarComponent, Navbar2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public isAppOne: boolean = false;

  constructor(router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        console.log(event.url)
      }
    })
  }
 
  
}
