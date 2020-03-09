import { Component, OnInit } from '@angular/core';

import { ToDo } from './models/todo.model';

const toDos: ToDo[] = [
  {
    complete: false,
    task: 'Use generators in Angular'
  },
  {
    complete: false,
    task: 'Master JavaScript generators'
  },
  {
    complete: true,
    task: 'Explore JavaScript generators'
  }
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  completeToDos: Array<ToDo>;
  incompleteToDos: Array<ToDo>;

  ngOnInit() {
    this.completeToDos = Array.from(this.getCompleteToDos());
    this.incompleteToDos = Array.from(this.getIncompleteToDos());
  }

  *getCompleteToDos() {
    for (const toDo of toDos) {
      if (toDo.complete) {
        yield toDo;
      }
    }
  }

  *getIncompleteToDos() {
    for (const toDo of toDos) {
      if (!toDo.complete) {
        yield toDo;
      }
    }
  }
}
