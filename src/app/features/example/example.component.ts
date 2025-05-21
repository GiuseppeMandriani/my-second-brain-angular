import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-example',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export default class ExampleComponent {

}
