import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TodoListComponent, PhoneListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
