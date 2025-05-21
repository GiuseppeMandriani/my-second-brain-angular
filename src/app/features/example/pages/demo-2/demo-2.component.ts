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

@Component({
  selector: 'app-demo-2',
  imports: [UpperCasePipe, NgClass, JsonPipe],
  templateUrl: './demo-2.component.html',
  styleUrl: './demo-2.component.css',
})
export default class Demo2Component implements OnInit {
  @Input() title = ''; // get data.title // NEW FROM ANGULAR 16 see app.config providerRoot

  todos = signal<Todo[]>([]);
  http = inject(HttpClient);

  totalCompleted = computed(
    () => this.todos().filter((t) => t.completed).length
  );
  totalTodos = computed(() => this.todos().filter((t) => !t.completed).length);

  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    // METODO CON SIGNALS E SERVICE

    this.toDoService.getTodo().subscribe((res) => {
      this.todos.set(res);
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

    this.toDoService
      .addTodo({
        title: input.value,
        completed: false,
      })
      .subscribe((newTodo: Todo) => {
        this.todos.update((prevTodos) => [...prevTodos, newTodo]);
      });

    input.value = '';
  }

  removeTodo(toDoToRemove: Todo) {
    // this.http
    //   .delete<Todo>(`http://localhost:3000/local-todos/${toDoToRemove.id}`)
    //   .subscribe(() => {
    //     this.todos.update((prevTodos) =>
    //       prevTodos.filter((todo) => todo.id !== toDoToRemove.id)
    //     );
    //   });

    if (toDoToRemove && toDoToRemove.id) {
      this.toDoService.deleteTodo({ id: toDoToRemove.id }).subscribe(() => {
        this.todos.update((prevTodos) =>
          prevTodos.filter((todo) => todo.id !== toDoToRemove.id)
        );
      });
    }
  }

  toggleTodo(todoToToggle: Todo) {
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
      this.toDoService.updateTodo({ id: todoToToggle.id }).subscribe((res) => {
        this.todos.update((todos) => {
          return todos.map((t) => (t.id === todoToToggle.id ? res : t));
        });
      });
    }
  }

  saveAll() {
    console.log(this.todos);
  }
}
