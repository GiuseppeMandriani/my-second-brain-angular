import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-uikit',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './uikit.component.html',
  styleUrl: './uikit.component.scss'
})
export default class UikitComponent {

}
