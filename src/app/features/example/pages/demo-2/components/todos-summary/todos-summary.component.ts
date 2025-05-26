import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-todos-summary',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos-summary.component.html',
  styleUrl: './todos-summary.component.scss'
})
export class TodosSummaryComponent {
  @Input() completed: number | undefined;
  @Input() todos: number | undefined;
}
