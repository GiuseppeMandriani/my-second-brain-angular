import { JsonPipe, NgClass, UpperCasePipe } from '@angular/common';
import {
  Component,
  computed,
  inject,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { Todo } from '../../../../core/api/todo/models/todo-data.model';
import { TodoService } from '../../../../core/api/todo/service/todo.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorComponent } from "../../../../shared/components/http-error/http-error.component";
import { TodosSummaryComponent } from "./components/todos-summary/todos-summary.component";
import { TodosFormComponent } from "./components/todos-form/todos-form.component";

@Component({
  selector: 'app-demo-2',
  imports: [UpperCasePipe, NgClass, HttpErrorComponent, TodosSummaryComponent, TodosFormComponent],
  templateUrl: './demo-2.component.html',
  styleUrl: './demo-2.component.css',
})
export default class Demo2Component implements OnInit {
  @Input() title = ''; // get data.title // NEW FROM ANGULAR 16 see app.config providerRoot

  todos = signal<Todo[]>([]);
  http = inject(HttpClient);
  error = signal<boolean>(false);

  totalCompleted = computed(
    () => this.todos().filter((t) => t.completed).length
  );
  totalTodos = computed(() => this.todos().filter((t) => !t.completed).length);

  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    // METODO CON SIGNALS E SERVICE

    // this.toDoService.getTodo().subscribe((res) => {
    //   this.todos.set(res);
    // });
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

    // METODO CLASSICO HTTP GET

    // this.http.get<any[]>('http://localhost:3000/local-todos')
    // .subscribe(res => {
    //   this.todos.set(res);
    // })
  }

  addTodo(input: HTMLInputElement) {
    // this.http
    //   .post<Todo>('http://localhost:3000/local-todos', {
    //     title: input.value,
    //     completed: false,
    //   })
    //   .subscribe((newTodo: Todo) => {
    //     this.todos.update((prevTodos) => [...prevTodos, newTodo]);
    //   });
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
    // this.http
    //   .delete<Todo>(`http://localhost:3000/local-todos/${toDoToRemove.id}`)
    //   .subscribe(() => {
    //     this.todos.update((prevTodos) =>
    //       prevTodos.filter((todo) => todo.id !== toDoToRemove.id)
    //     );
    //   });

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
    // this.http.patch<Todo>(`http://localhost:3000/local-todos/${todoToToggle.id}`, {
    //   ...todoToToggle,
    //   completed: !todoToToggle.completed
    // })
    //   .subscribe(res => {
    //     this.todos.update(todos => {
    //       return todos.map(t => t.id === todoToToggle.id ? res : t);
    //     })
    //   })

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
