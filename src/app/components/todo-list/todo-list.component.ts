import { Component, Input } from '@angular/core';

import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() toDos: Array<ToDo>;

  constructor() { }

}