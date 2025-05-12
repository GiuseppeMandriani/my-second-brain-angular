import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
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
    this.todos.push(newTodo)
    input.value = '';
  }

  removeTodo(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1)
  }

  toggleTodo(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  }

  saveAll() {
    console.log(this.todos)
  }
}
