import { CommonModule, NgClass } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type Alert = {
  msg: string;
  type: 'primary' | 'danger' | 'success'
}

type MenuItem = {
  section: Section;
  label: string;
}

type Section = 'home' | 'step1' | 'step2' | 'final' | null;

type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

export type Coords = {
  x: number;
  y: number;
}

type Product = {
  id: number;
  name: string;
  cost: number;
  description?: string;
}

const initialState: Product[] = [
  {id: 1, name: 'Chocolate', cost: 3},
  {id: 2, name: 'Milk', cost: 1},
  {id: 3, name: 'Biscuits', cost: 2},
]

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'angular-course';
  public dynamicValue: number = 0;
  public imgLogoConfig = {
    src: "https://miro.medium.com/v2/resize:fit:1400/1*WWRm1tIQ5MinLE0rUTo62w.png",
    alt: "Logo Angular",
    width: 200,
  }

  alert: Alert = {
    msg: 'hello',
    type: 'primary'
  }


  section: Section = null;
  position: Coords | null = null;

  menuItems: MenuItem[] = [
    { section: 'home', label: 'Home'},
    { section: 'step1', label: 'Step 1'},
    { section: 'step2', label: 'Step 2'},
    { section: 'final', label: 'Final'},
  ]

  public todos: Todo[] = [
    {
      id: 1,
      title: 'To do 1',
      completed: true
    },
    {
      id: 2,
      title: 'To do 2',
      completed: false
    },
    {
      id: 3,
      title: 'To do 3',
      completed: false
    },
  ]

  counter = signal<number>(0);

  logged = signal(false);

  currentStep = signal<'step1' | 'step2' | 'final' | null>(null);

  products = signal<Product[]>([]);

  noItems = computed(() => this.products().length === 0)
  totalProducts = computed(() => this.products().length)

  productsTest = signal<Product[]>([
    {id: 1, name: 'Chocolate', cost: 3, description: 'lorem ...'},
    {id: 2, name: 'Milk', cost: 1, description: 'bla bla..'},
    {id: 3, name: 'Biscuits', cost: 2, description: 'super good!'},
  ]);

  activeProduct = signal<Product | null>(null);

  todosList = signal<Todo[]>([
    { id: 1, title: 'Todo 1', completed: true },
    { id: 2, title: 'Todo 2', completed: false },
    { id: 3, title: 'Todo 3', completed: true },
  ])

  totalCompleted = computed(() => this.todosList().filter(t => t.completed).length)
  totalTodos = computed(() => this.todosList().filter(t => !t.completed).length)


  constructor() {
    effect( () => {
      localStorage.setItem('counter', JSON.stringify(this.counter()))
    })
  }



  show(event: MouseEvent) {
    this.position = {
      x: event.clientX + 10,
      y: event.clientY + 10
    }
  }

  hide() {
    this.position = null;
  }

  addTodo(input: HTMLInputElement) {
    const newTodo: Todo = {
      id: Date.now(),
      title: input.value,
      completed: false
    }
    // this.todos.push(newTodo)
    this.todos = [...this.todos, newTodo]
    input.value = '';
  }

  removeTodo(id: number) {
    // const index = this.todos.findIndex(todo => todo.id === id);
    // this.todos.splice(index, 1)
    this.todos = this.todos.filter(todo => todo.id !== id )
  }

  toggleTodo(id: number) {
    // const index = this.todos.findIndex(todo => todo.id === id);
    // this.todos[index].completed = !this.todos[index].completed;
    this.todos = this.todos.map(todo => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo;
    })
  }

  saveAll() {
    console.log(this.todos)
  }

  // SIGNALS

  hideIfZero = computed(() => {
    return this.counter() === 0 ? 'none' : 'inline'
  })

  isZero = computed(() => {
    return this.counter() === 0
  })


  isZeroColor = computed(() => {
    console.log('isZeroColor')
    return this.isZero() ? 'red' : 'green'
  })
  /*
  isZero() {
    console.log('is zero')
    return this.counter() === 0
  }
  */
  dec() {
    this.counter.update(c => c - 1)
  }

  inc() {
    this.counter.update(c => c + 1)
  }

  reset() {
    this.counter.set(0)
  }

  doNothing() {

  }


  signIn() {
    this.logged.set(true)
  }

  logout() {
    this.logged.set(false)
  }



  loadProducts() {
    this.products.set(initialState)
  }

  selectProduct(product: Product) {
    this.activeProduct.set(product)
  }

  _addTodo(input: HTMLInputElement) {
    const newTodo: Todo = {
      id: Date.now(),
      title: input.value,
      completed: false
    }
    
    this.todosList.update(todos => [...todos, newTodo])
    input.value = '';
  }

  _removeTodo(todoToRemove: Todo) {
    this.todosList.update(
      todos => todos.filter(todo => todo.id !== todoToRemove.id)
    )
  }

  _toggleTodo(todoToToggle: Todo) {
    this.todosList.update(todos => {
      return todos.map(
        t => t.id === todoToToggle.id ? {...t, completed: !t.completed} : t
      )
    })
  }

  
}
