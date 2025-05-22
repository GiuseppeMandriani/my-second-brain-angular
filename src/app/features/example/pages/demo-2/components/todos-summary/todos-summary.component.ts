import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-todos-summary',
  imports: [],
  templateUrl: './todos-summary.component.html',
  styleUrl: './todos-summary.component.css'
})
export class TodosSummaryComponent {
  @Input() completed: number | undefined;
  @Input() todos: number | undefined;
}
