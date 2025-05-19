import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  
}
