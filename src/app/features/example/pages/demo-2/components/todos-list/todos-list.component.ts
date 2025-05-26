import { JsonPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../../../../core/api/todo/models/todo-data.model';

@Component({
  selector: 'app-todos-list',
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  @Input() todos: Todo[] = [];

  @Output() toggleTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<Todo>();

  toggle(todo: Todo) {
    this.toggleTodo.emit(todo);
  }

  delete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
