import { Component, computed, inject, signal } from '@angular/core';
import { TodosListComponent } from "../example/pages/demo-2/components/todos-list/todos-list.component";
import { TodosSummaryComponent } from "../example/pages/demo-2/components/todos-summary/todos-summary.component";
import { TodosFormComponent } from "../example/pages/demo-2/components/todos-form/todos-form.component";
import { HttpErrorComponent } from "../../shared/components/http-error/http-error.component";
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../core/api/todo/models/todo-data.model';
import { TodoService } from '../../core/api/todo/service/todo.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-my-todos',
  imports: [TodosListComponent, TodosSummaryComponent, TodosFormComponent, HttpErrorComponent],
  templateUrl: './my-todos.component.html',
  styleUrl: './my-todos.component.css'
})
export default class MyTodosComponent {
  todos = signal<Todo[]>([]);
  http = inject(HttpClient);
  error = signal<boolean>(false);

  user = toSignal(inject(AuthService).user$);


  nickName = computed(() => {
    return `${this.user()?.nickname}`
  })

  userTodos = computed(() => {
    return this.todos().filter(todo => todo.nickname === this.nickName());
  });

  totalCompleted = computed(
    () => this.userTodos().filter((t) => t.completed).length
  );
  totalTodos = computed(() => this.userTodos().filter((t) => !t.completed).length);

  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    // METODO CON SIGNALS E SERVICE

    this.toDoService.getTodo().subscribe({
      next: (res) => {
        this.todos.set(res);
      },
      error: (err) => {
        console.error('Error fetching todos:', err);
        this.error.set(true);
      },
      complete: () => {
        console.log('Todos fetched successfully');
      },
    });

  }

  addTodo(input: HTMLInputElement) {

    this.error.set(false);

    this.toDoService
      .addTodo({
        title: input.value,
        completed: false,
      })
      .subscribe({
        next: (newTodo: Todo) => {
          this.todos.update((prevTodos) => [...prevTodos, newTodo]);
        },
        error: (err) => {
          console.error('Error fetching todos:', err);
          this.error.set(true);
        },
      });

    input.value = '';
  }

  removeTodo(toDoToRemove: Todo) {
    this.error.set(false);


    if (toDoToRemove && toDoToRemove.id) {
      this.toDoService.deleteTodo({ id: toDoToRemove.id }).subscribe({
        next: () => {
          this.todos.update((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== toDoToRemove.id)
          );
        },
        error: (err) => {
          console.error('Error fetching todos:', err);
          this.error.set(true);
        },
      });
    }
  }

  toggleTodo(todoToToggle: Todo) {
    this.error.set(false);

    if (todoToToggle && todoToToggle.id) {
      this.toDoService.updateTodo({
        ...todoToToggle,
        completed: !todoToToggle.completed
      }).subscribe({
        next: (res) => {
          this.todos.update((todos) => {
            return todos.map((t) => (t.id === todoToToggle.id ? res : t));
          });
        },
        error: (err) => {
          console.error('Error fetching todos:', err);
          this.error.set(true);
        },
      });
    }
  }

  saveAll() {
    console.log(this.todos);
  }

}
