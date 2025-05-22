import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../../../../core/api/todo/models/todo-data.model';

@Component({
  selector: 'app-todos-form',
  imports: [],
  templateUrl: './todos-form.component.html',
  styleUrl: './todos-form.component.css'
})
export class TodosFormComponent {
  @Output() addTodo = new EventEmitter<HTMLInputElement>();
}
