import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-http-error',
  imports: [],
  templateUrl: './http-error.component.html',
  styleUrl: './http-error.component.scss'
})
export class HttpErrorComponent {
  @Input() msg: string = 'Errore';
}
